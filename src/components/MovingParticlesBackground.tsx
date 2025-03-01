
import React, { useEffect, useState, useRef, useCallback } from "react";

const MovingParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameIdRef = useRef<number>(0);
  // Уменьшим количество частиц для Firefox и других браузеров
  const particleCountRef = useRef(window.navigator.userAgent.toLowerCase().includes("firefox") ? 15 : 30);
  // Используем requestAnimationFrame throttling для Firefox
  const lastTimeRef = useRef<number>(0);
  const frameRateRef = useRef<number>(window.navigator.userAgent.toLowerCase().includes("firefox") ? 30 : 60);
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
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1 + 0.5, // Еще меньше размер частиц
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.2, // Еще сильнее снижаем скорость
        speedY: (Math.random() - 0.5) * 0.2, // Еще сильнее снижаем скорость
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
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      
      // Используем простой debounce для resize события
      if (window.navigator.userAgent.toLowerCase().includes("firefox")) {
        if (resizeTimeoutRef.current !== null) {
          clearTimeout(resizeTimeoutRef.current);
        }
        resizeTimeoutRef.current = window.setTimeout(() => {
          setParticles(initParticles());
        }, 300);
      } else {
        setParticles(initParticles());
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
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true }); // Используем desynchronized для лучшей производительности
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particlesRef = [...particles]; // Создаем локальную копию для избежания обращений к state
    
    const animate = (timestamp: number) => {
      // Применяем throttling для анимации в Firefox
      if (window.navigator.userAgent.toLowerCase().includes("firefox")) {
        const elapsed = timestamp - lastTimeRef.current;
        if (elapsed < 1000 / frameRateRef.current) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
          return;
        }
        lastTimeRef.current = timestamp - (elapsed % (1000 / frameRateRef.current));
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Используем технику batch rendering для оптимизации
      ctx.beginPath();
      
      for (let i = 0; i < particlesRef.length; i++) {
        const particle = particlesRef[i];
        
        // Рисуем частицу
        ctx.moveTo(particle.x + particle.radius, particle.y);
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Обновляем позицию с меньшей частотой для Firefox
        if (!window.navigator.userAgent.toLowerCase().includes("firefox") || i % 2 === 0) {
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
      
      // Заливаем все частицы одним вызовом
      ctx.fillStyle = '#6E57E0' + '40'; // Фиксированный цвет с прозрачностью
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
          willChange: 'auto' // Оптимизация для браузера
        }}
      />
    </div>
  );
};

// Используем React.memo для предотвращения лишних перерисовок
export default React.memo(MovingParticlesBackground);
