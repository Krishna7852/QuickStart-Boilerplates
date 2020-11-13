import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'projects/environments/environment';
// import { userProfileReducer, UserProfileState } from './user-profile.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 * Ref: https://github.com/ngrx/platform/blob/127ccc99663442ea1a902e459ae9fb1041fd7f80/example-app/app/reducers/index.ts
 */
// tslint:disable-next-line: no-empty-interface
export interface State {
  // TODO: Bellow is the sample code for reference
  // profile: UserProfileState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  // TODO: Bellow is the sample code for reference
  // profile: userProfileReducer
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    console.group(action.type);
    console.log('%c prev state', `color: #9E9E9E; font-weight: bold`, state);
    console.log('%c action', `color: #03A9F4; font-weight: bold`, action);
    console.log(
      '%c next state',
      `color: #4CAF50; font-weight: bold`,
      nextState
    );

    console.groupEnd();
    return nextState;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 * ngrx/store composes your map of reducers into a single reducer.
 * Note: Meta-reducers in NgRx are similar to middleware used in Redux.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [debug]
  : [];
