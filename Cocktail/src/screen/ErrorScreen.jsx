import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export default function ErrorScreen() {
  useTitle("ERRORE");

  return (
    <Wrapper>
      <h3>Pagina non trovata</h3>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 500, height: 500 }}
      />
      <Link to="/" className="btn btn-primary">
        Torna in home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  place-items: center;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;
