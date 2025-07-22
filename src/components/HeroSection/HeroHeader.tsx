const HeroHeader = () => (
  <header>
    <p className="text-lg md:text-xl font-medium text-muted-foreground mt-2">
      <span className="opacity-0 animate-fade-in">Hi, I'm{" "}</span>
      <span className="text-primary opacity-0 animate-fade-in-delay-1">Ovett</span>
      <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Mora{" "}</span>
      <span role="img" aria-label="waving hand" className="animate-wave">👋</span>
    </p>
  </header>
);

export default HeroHeader;
