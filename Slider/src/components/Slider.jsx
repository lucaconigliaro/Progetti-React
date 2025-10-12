import { useState, useEffect, useCallback } from "react";
import Slide from "./Slide";
import data from "../data";

export default function Slider() {
  const [recensioni] = useState(data);
  const [active, setActive] = useState(0);

  const prossimaSlide = useCallback(() => {
    setActive((prev) => (prev + 1 > recensioni.length - 1 ? 0 : prev + 1));
  }, [recensioni.length]);

  const precedenteSlide = useCallback(() => {
    setActive((prev) => (prev - 1 < 0 ? recensioni.length - 1 : prev - 1));
  }, [recensioni.length]);

  useEffect(() => {
    const timer = setTimeout(prossimaSlide, 5000);
    return () => clearTimeout(timer);
  }, [active, prossimaSlide]);

  return (
    <div className="container slider">
      {recensioni.map((recensione, index) => {
        //Cambio classe in base alla posizione dell'elemento rispetto a quello attivo
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          active === index + 1 ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }
        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}
      <div className="btn-group slider-btn-group">
        <button className="btn btn-slider prev-slide" onClick={precedenteSlide}>
          prev
        </button>
        <button className="btn btn-slider next-slide" onClick={prossimaSlide}>
          next
        </button>
      </div>
    </div>
  );
}
