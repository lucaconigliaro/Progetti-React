import { useReducer, useEffect, createContext } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
} from "./actions";

const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Elimina un singolo elemento
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };

  // Svuota il carrello
  const deleteAll = () => {
    dispatch({ type: SVUOTA_CARRELLO });
  };

  //Aumenta Quantità
  const addQty = (id) => {
    return dispatch({ type: AUMENTA_QTY, payload: id });
  };

  //Riduce quantità singolo elemento
  const dimQty = (id) => {
    return dispatch({ type: DIMINUISCI_QTY, payload: id });
  };

  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data.data });
      } catch (err) {
        dispatch({ type: DATA_FETCHING_FAILED });
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.products]);

  return (
    <AppContext.Provider
      value={{ ...state, deleteAll, deleteItem, addQty, dimQty }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
