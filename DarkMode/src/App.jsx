import { useState } from "react";
import data from "./data";
import Articolo from "./components/Articolo";
import { useEffect } from "react";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function App() {
  const [theme, setTeme] = useState(getFromLocalStorage());

  // Funzione che cambia il tema a seconda del suo valore
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTeme("dark-mode");
    } else {
      setTeme("light-mode");
    }
  };

  // Al mutare del theme state, attacca una classe al nostro HTML Tag
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaTema}>
          Cambia
        </button>
        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
