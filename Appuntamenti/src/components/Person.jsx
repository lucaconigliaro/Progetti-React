import { RiDeleteBack2Fill } from "react-icons/ri";

function Person({ id, nome, stato, img, removeItem }) {
  return (
    <article>
      <img src={img} alt="person" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => removeItem(id)}>
            <RiDeleteBack2Fill className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
}

export default Person;
