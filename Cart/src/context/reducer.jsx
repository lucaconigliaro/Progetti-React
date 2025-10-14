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

const reducer = (state, action) => {
  switch (action.type) {
    // Inizio fetch dei dati
    case DATA_FETCHING_STARTED:
      return { ...state, isError: false, isLoading: true };

    // Dati fetchati con successo
    case DATA_FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload.map((el) => ({ ...el, qty: 1 })),
      };

    // Fetch fallito
    case DATA_FETCHING_FAILED:
      return { ...state, isError: true, isLoading: false };

    // Rimuovo un item
    case DELETE_ITEM:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== action.payload),
      };

    // Aumento quantità
    case AUMENTA_QTY:
      return {
        ...state,
        products: state.products.map((el) =>
          el._id === action.payload ? { ...el, qty: el.qty + 1 } : el
        ),
      };

    // Diminuisco quantità
    case DIMINUISCI_QTY:
      return {
        ...state,
        products: state.products.map((el) =>
          el._id === action.payload ? { ...el, qty: el.qty - 1 } : el
        ),
      };

    // Calcolo somma totale
    case COSTO_TOTALE:
      return {
        ...state,
        total: state.products.reduce(
          (total, item) => total + item.price * item.qty,
          0
        ),
      };

    // Calcolo numero totale di items
    case CONTATORE:
      return {
        ...state,
        itemCounter: state.products.reduce((total, item) => total + item.qty, 0),
      };

    // Svuoto il carrello
    case SVUOTA_CARRELLO:
      return { ...state, products: [] };

    // Default: ritorna lo stato attuale
    default:
      return state;
  }
};

export default reducer;