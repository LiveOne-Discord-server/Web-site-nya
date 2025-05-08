
import React, { useEffect, useState, useRef, useCallback } from "react";

const MovingParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameIdRef = useRef<number>(0);
  // Значительно уменьшаем количество частиц для Firefox и других браузеров
  const particleCountRef = useRef(window.navigator.userAgent.toLowerCase().includes("firefox") ? 8 : 30);
  // Используем requestAnimationFrame throttling для Firefox с более низкой частотой обновления
  const lastTimeRef = useRef<number>(0);
  const frameRateRef = useRef<number>(window.navigator.userAgent.toLowerCase().includes("firefox") ? 20 : 60);
  // Добавляем resizeTimeoutRef для использования вместо window.resizeTimeout
  const resizeTimeoutRef = useRef<number | null>(null);
  
  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    opacity: number;
  }
  
  // Мемоизация инициализации частиц
  const initParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const colors = ['#5865F2', '#9B87F5', '#6E57E0', '#8B5CF6', '#4752C4', '#7C3AED'];
    
    for (let i = 0; i < particleCountRef.current; i++) {
      // Для Firefox используем еще меньшие и более медленные частицы
      const isFirefox = window.navigator.userAgent.toLowerCase().includes("firefox");
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: isFirefox ? 0.5 : (Math.random() * 1 + 0.5), // Фиксированный меньший размер для Firefox
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * (isFirefox ? 0.1 : 0.2), // Еще медленнее для Firefox
        speedY: (Math.random() - 0.5) * (isFirefox ? 0.1 : 0.2), // Еще медленнее для Firefox
        opacity: Math.random() * 0.4 + 0.1 // Немного понижаем прозрачность
      });
    }
    
    return newParticles;
  }, []);
  
  // Инициализация частиц
  useEffect(() => {
    setParticles(initParticles());
    
    const handleResize = () => {
      if (canvasRef.current) {
        const isFirefox = window.navigator.userAgent.toLowerCase().includes("firefox");
        
        // Оптимизация для Firefox: уменьшаем размер canvas
        if (isFirefox) {
          canvasRef.current.width = Math.floor(window.innerWidth * 0.8);
          canvasRef.current.height = Math.floor(window.innerHeight * 0.8);
          
          // Используем более длительный debounce для Firefox
          if (resizeTimeoutRef.current !== null) {
            clearTimeout(resizeTimeoutRef.current);
          }
          resizeTimeoutRef.current = window.setTimeout(() => {
            setParticles(initParticles());
          }, 500); // Увеличиваем задержку для Firefox
        } else {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          setParticles(initParticles());
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current !== null) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [initParticles]);
  
  // Оптимизированный анимационный цикл
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;
    
    const canvas = canvasRef.current;
    // Оптимизация контекста canvas для Firefox
    const isFirefox = window.navigator.userAgent.toLowerCase().includes("firefox");
    const ctx = canvas.getContext('2d', { 
      alpha: true, 
      desynchronized: true, // Используем desynchronized для лучшей производительности
      willReadFrequently: false, // Оптимизация для Firefox
      powerPreference: isFirefox ? 'low-power' : 'default' // Экономия энергии для Firefox
    });
    if (!ctx) return;
    
    // Дополнительные оптимизации для Firefox
    if (isFirefox) {
      // Уменьшаем размер canvas для Firefox для улучшения производительности
      canvas.width = Math.floor(window.innerWidth * 0.8);
      canvas.height = Math.floor(window.innerHeight * 0.8);
      // Отключаем сглаживание для Firefox
      ctx.imageSmoothingEnabled = false;
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    const particlesRef = [...particles]; // Создаем локальную копию для избежания обращений к state
    
    const animate = (timestamp: number) => {
      const isFirefox = window.navigator.userAgent.toLowerCase().includes("firefox");
      
      // Применяем throttling для анимации в Firefox
      if (isFirefox) {
        const elapsed = timestamp - lastTimeRef.current;
        if (elapsed < 1000 / frameRateRef.current) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
          return;
        }
        lastTimeRef.current = timestamp - (elapsed % (1000 / frameRateRef.current));
      }
      
      // Оптимизация для Firefox: используем более легкую очистку
      if (isFirefox) {
        // Вместо полной очистки используем прозрачный слой
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      
      // Используем технику batch rendering для оптимизации
      ctx.beginPath();
      
      // Для Firefox обновляем только каждую 3-ю частицу в каждом кадре
      const updateInterval = isFirefox ? 3 : 1;
      
      for (let i = 0; i < particlesRef.length; i++) {
        const particle = particlesRef[i];
        
        // Рисуем частицу только если она видима (оптимизация для Firefox)
        if (!isFirefox || particle.x >= 0 && particle.x <= canvas.width && particle.y >= 0 && particle.y <= canvas.height) {
          ctx.moveTo(particle.x + particle.radius, particle.y);
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        }
        
        // Обновляем позицию с меньшей частотой для Firefox
        if (!isFirefox || i % updateInterval === 0) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Отражаемся от краев с оптимизацией
          if (particle.x < 0) {
            particle.x = 0;
            particle.speedX *= -1;
          } else if (particle.x > canvas.width) {
            particle.x = canvas.width;
            particle.speedX *= -1;
          }
          
          if (particle.y < 0) {
            particle.y = 0;
            particle.speedY *= -1;
          } else if (particle.y > canvas.height) {
            particle.y = canvas.height;
            particle.speedY *= -1;
          }
        }
      }
      
      // Заливаем все частицы одним вызовом с более прозрачным цветом для Firefox
      ctx.fillStyle = isFirefox ? '#6E57E020' : '#6E57E040'; // Более прозрачный для Firefox
      ctx.fill();
      
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [particles]);
  
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          filter: window.navigator.userAgent.toLowerCase().includes("firefox") ? 'none' : 'brightness(0.7)',
          willChange: window.navigator.userAgent.toLowerCase().includes("firefox") ? 'transform' : 'auto', // Более специфичная оптимизация для Firefox
          transform: window.navigator.userAgent.toLowerCase().includes("firefox") ? 'translateZ(0)' : 'none', // Включаем аппаратное ускорение для Firefox
          imageRendering: window.navigator.userAgent.toLowerCase().includes("firefox") ? 'optimizeSpeed' : 'auto', // Оптимизация рендеринга для Firefox
          opacity: window.navigator.userAgent.toLowerCase().includes("firefox") ? 0.8 : 1 // Немного уменьшаем непрозрачность для Firefox
        }}
      />
    </div>
  );
};

// Используем React.memo для предотвращения лишних перерисовок
export default React.memo(MovingParticlesBackground);
