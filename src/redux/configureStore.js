import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import Rootreducer from "./reducers/reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
export default function configureStore(initialState) {
  const composeEnhancer =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    Rootreducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk,reduxImmutableStateInvariant()))
  );
}
