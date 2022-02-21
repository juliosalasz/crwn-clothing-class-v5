import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

const Store = createStore(rootReducer, applyMiddleware(...middlewares));

const Persistor = persistStore(Store);

export { Store, Persistor };
