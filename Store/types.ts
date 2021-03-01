import { Asset, CryptoType } from '../types';

export enum ActionType {
  AddAsset = 'AddAsset',
}

export interface State {
  assets: Asset[];
}

export interface AddAssetPayload {
  currency: CryptoType;
  marketId: number;
  amount: number;
}

export interface Action {
  type: ActionType;
  payload?: AddAssetPayload;
}

export type reducerType = (state: State, action: Action) => State;
