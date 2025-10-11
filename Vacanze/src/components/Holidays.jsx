import axios from "axios";
import SingleHoliday from "./SingleHoliday";
import { useState } from "react";
import { useEffect } from "react";

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function Holidays() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  // Funzione per scegliere il prossimo valore di selected e la prossima vacanza
  const nextHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === data.data.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  // Funzione per diminuire valore di selected e passare alla vacanza precedente
  const prevHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  // Funzione per fetchare i dati dall'API
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Return condizionale per controllare il risultato della Promise
  if (data.success) {
    return (
      <>
        {
          // Ternary operator per controllare il numero di vacanze
          data.data.length > 0 ? (
            <SingleHoliday
              {...data.data[selected]}
              next={nextHoliday}
              prev={prevHoliday}
            />
          ) : (
            <h4>Nessuna Vacanza</h4>
          )
        }
      </>
    );
  } else {
    return <h2>...loading</h2>;
  }
}

export default Holidays;
