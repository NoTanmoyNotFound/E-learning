import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import localReducer from "./user/localSlice";
import { persistReducer , persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user : userReducer,
    local : localReducer

})  


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    
}
 const persisteReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persisteReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);
