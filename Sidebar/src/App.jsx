import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context/useGlobalContext";

function App() {
  const { isModalOpen, openModal } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Sidebar />
      <Modal />
      {!isModalOpen && (
        <main className="modal-controller">
          <button className="btn btn-selector" onClick={openModal}>
            Apri Modal
          </button>
        </main>
      )}
    </>
  );
}

export default App;
