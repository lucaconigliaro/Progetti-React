import { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/useGlobalContext";

export default function HomeScreen() {
  const { query, isLoading, data, isError, count, searchCocktail } =
    useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">WIKI DRINK</h2>
              <h4>Tutti i cockatail del mondo a portata di click</h4>
              <p>
                Wiki drink è un database internazionale che mette a tua
                disposizione, in maniera{" "}
                <span className="brand-color">Gratuita</span>, le rictte dei più
                importanti e diffusi cocktail al mondo
              </p>
              <Link to="/about" className="btn btn-primary">
                Scopri di più
              </Link>
            </div>
          </div>
          <div className="home-hero-img">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ height: 350 }}
            />
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Cerca il tuo drink</h4>
              </label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{count} risultati</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
