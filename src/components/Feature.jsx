function Feature({ src, alt, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="h-18 pb-8" src={src} alt={alt} />
      <h1 className="pb-2.5 text-white font-bold text-lg">{title}</h1>
      <p className="text-white/50">{description}</p>
      <p className="text-white/50">{description}</p>
      <p className="text-white/50">{description}</p>
    </div>
  );
}

export default Feature;
