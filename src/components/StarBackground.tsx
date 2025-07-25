import { useState, useEffect, useCallback } from "react";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: string;
  animationDuration: number;
}

const generateStars = () => {
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
  return Array.from({ length: numberOfStars }, (_, index) => ({
    id: index,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
  }));
};

const generateMeteors = () => {
  const numberOfMeteors = 4;
  return Array.from({ length: numberOfMeteors }, (_, index) => ({
    id: index,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 20,
    delay: String(Math.random() * 15),
    animationDuration: Math.random() * 3 + 3,
  }));
};

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>(() => generateStars());
  const [meteors] = useState<Meteor[]>(() => generateMeteors());

  const handleResize = useCallback(() => {
    setStars(generateStars());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s"
          }}
        />
      ))}

      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s"
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;