import { combineReducers } from "redux";
import countryReducer from "./countryReducer";

// Combina los reducers individuales en un reducer raíz
const rootReducer = combineReducers({
  country: countryReducer,
});

export default rootReducer;
