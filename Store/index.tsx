import React, { useReducer, createContext } from 'react';
// import * as Storage from 'expo-secure-store';

import {
  Action,
  ActionType,
  AddAssetPayload,
  reducerType,
  State,
} from './types';

const initialState: State = {
  assets: [],
};

export const StoreContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

function addAsset(state: State, action: Action): State {
  const payload = action.payload as AddAssetPayload;

  return {
    ...state,
    assets: [
      ...state.assets,
      {
        id: state.assets.length,
        ...payload,
      },
    ],
  };
}

function reducer(state: State, action: Action): State {
  const selectedReducer: reducerType = {
    [ActionType.AddAsset]: addAsset,
  }[action.type];

  return selectedReducer(state, action);
}

export const StoreContextProvider: React.FC<React.PropsWithChildren<{}>> = (
  props,
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
