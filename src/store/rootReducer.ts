import { CombinedState, combineReducers, Reducer } from "redux";
import { RootStore } from "./RootStore";
import userReducer from "./user/user.reducer";

const rootReducer: Reducer<CombinedState<RootStore>> = combineReducers<
  RootStore
>({
  user: userReducer,
});

export default rootReducer;
