import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, StyleSheet } from 'react-native';

import StyledText from '../../components/Layout/StyledText';
import Screen from '../../components/Layout/Screen';
import AssetSummaryItem from '../../components/Crypto/AssetSummaryItem';
import { Asset, RootStackParamList } from '../../types';
import { assets } from './tempData';

export default function DashboardScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Dashboard'>) {
  function keyExtractor(asset: Asset) {
    return `${asset.id}`;
  }

  function renderAsset(params: { item: Asset }) {
    return <AssetSummaryItem asset={params.item} onPress={() => {}} />;
  }

  return (
    <FlatList
      data={assets}
      renderItem={renderAsset}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
