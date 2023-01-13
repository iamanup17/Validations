import { configureStore } from "@reduxjs/toolkit";
import TimerReducer from "./reducers/TimerReducer";

export const store = configureStore({
    reducer : {
        timer : TimerReducer
    }
})