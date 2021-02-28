import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { getCurrencyIcon } from '../../utilities/assetHelper';
import { Currencies, Markets } from '../../data';
import { Asset } from '../../types';
import StyledText from '../Layout/StyledText';

interface CoinSummaryItemProps {
  asset: Asset;
  onPress?: () => void;
}

const CoinSummaryItem: React.FC<CoinSummaryItemProps> = (props) => {
  const { asset, onPress } = props;
  const currency = Currencies[asset.currency];
  const market = Markets[asset.marketId];

  return (
    <View style={styles.container}>
      <SvgXml style={styles.icon} xml={getCurrencyIcon(asset.currency)} />
      <View style={styles.main}>
        <StyledText>{currency.name}</StyledText>
        <StyledText>{market.name}</StyledText>
      </View>
      <View>
        <StyledText>
          {asset.amount} ({currency.type})
        </StyledText>
      </View>
    </View>
  );
};

export default CoinSummaryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  main: {
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 32 / 2,
    marginRight: 10,
  },
});
