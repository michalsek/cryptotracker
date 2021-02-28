import { CryptoType } from '../types';

import xrpIcon from 'cryptocurrency-icons/svg/color/xrp.svg';
import adaIcon from 'cryptocurrency-icons/svg/color/ada.svg';
import vetIcon from 'cryptocurrency-icons/svg/color/vet.svg';
import xlmIcon from 'cryptocurrency-icons/svg/color/xlm.svg';
import dotIcon from 'cryptocurrency-icons/svg/color/dot.svg';
import hotIcon from 'cryptocurrency-icons/svg/color/hot.svg';
import npxsIcon from 'cryptocurrency-icons/svg/color/npxs.svg';

export const getCurrencyIcon = (name: CryptoType) =>
  ({
    [CryptoType.XRP]: xrpIcon,
    [CryptoType.ADA]: adaIcon,
    [CryptoType.VET]: vetIcon,
    [CryptoType.XLM]: xlmIcon,
    [CryptoType.DOT]: dotIcon,
    [CryptoType.ZAP]: undefined,
    [CryptoType.SHA]: undefined,
    [CryptoType.HOT]: hotIcon,
    [CryptoType.NPXS]: npxsIcon,
  }[name]);
