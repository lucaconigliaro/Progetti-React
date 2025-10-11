import Person from "./Person";

function List(props) {
  return (
    <ul className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} removeItem={props.removeItem} />
        </li>
      ))}
    </ul>
  );
}

export default List;
