import { Currency, CryptoType } from '../types';

const Currencies: {
  [key: string]: Currency;
} = {
  [CryptoType.XRP]: {
    type: CryptoType.XRP,
    name: 'Ripple',
  },
  [CryptoType.ADA]: {
    type: CryptoType.ADA,
    name: 'Cardano',
  },
  [CryptoType.VET]: {
    type: CryptoType.VET,
    name: 'VeChain',
  },
  [CryptoType.XLM]: {
    type: CryptoType.XLM,
    name: 'Stellar Lumen',
  },
  [CryptoType.DOT]: {
    type: CryptoType.DOT,
    name: 'Polkadot',
  },
  [CryptoType.ZAP]: {
    type: CryptoType.ZAP,
    name: 'Zap',
  },
  [CryptoType.NPXS]: {
    type: CryptoType.NPXS,
    name: 'Pundi X',
  },
  [CryptoType.SHA]: {
    type: CryptoType.SHA,
    name: 'Safe Haven',
  },
  [CryptoType.HOT]: {
    type: CryptoType.HOT,
    name: 'Holo',
  },
};

export default Currencies;
