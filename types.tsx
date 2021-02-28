export type RootStackParamList = {
  Dashboard: undefined;
  NotFound: undefined;
};

export enum CryptoType {
  XRP = 'XRP',
  ADA = 'ADA',
  VET = 'VET',
  XLM = 'XLM',
  DOT = 'DOT',
  ZAP = 'ZAP',
  SHA = 'SHA',
  HOT = 'HOT',
  NPXS = 'NPXS',
}

export type Currency = {
  type: CryptoType;
  name: string;
};

export type Market = {
  id: number;
  name: string;
  iconName: string;
};

export type Asset = {
  id: number;
  currency: CryptoType;
  marketId: number;
  amount: number;
};
