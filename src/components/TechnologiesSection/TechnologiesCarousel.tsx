import { ICONS } from "@/data/iconsTecnologies";
import "./TechnologiesCarousel.css";

const TechnologiesCarousel = () => {
  const iconsLoop = [...ICONS, ...ICONS];
  return (
    <div className="slider">
      <div className="slide-track">
        {iconsLoop.map((icon, idx) => (
          <div key={"icon-" + idx} className="slide">
            <div
              className="w-12 h-12"
              dangerouslySetInnerHTML={{ __html: icon.svgPath }}
            />
            <p className="text-center mt-2">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesCarousel;
