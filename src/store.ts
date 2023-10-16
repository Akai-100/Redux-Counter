import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/counter/counterSlice";

export type RootState = {
    counterR: ReturnType<typeof counterSlice>
}

export const store = configureStore({
    reducer: {
        counterR: counterSlice
    }
});