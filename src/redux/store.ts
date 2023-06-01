import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	devTools: true,
	reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
