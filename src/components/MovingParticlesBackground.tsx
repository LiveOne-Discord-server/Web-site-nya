const MovingParticlesBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-black bg-cover bg-center bg-no-repeat"
      style={{
        filter: 'brightness(0.7)', // Keeping the darkness overlay
      }}
    />
  );
};

export default MovingParticlesBackground;