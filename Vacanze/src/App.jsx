import Title from "./components/Title";
import Holidays from "./components/Holidays";

function App() {
  return (
    <section className="section-center">
      <div className="container">
        <Title text="Le Nostre Vacanze" />
        <Holidays />
      </div>
    </section>
  );
}

export default App;
