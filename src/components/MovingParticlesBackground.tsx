const MovingParticlesBackground = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.gifer.com/SF1B.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.7)',
      }}
    />
  );
};

export default MovingParticlesBackground;