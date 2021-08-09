import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from "./reducers";

const stroe = createStore(reducer,composeWithDevTools())

export default stroe