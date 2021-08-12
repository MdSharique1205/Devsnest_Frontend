import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import dataReducer from "./dataReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  data: dataReducer,
  theme: themeReducer,
});

export default rootReducer;
