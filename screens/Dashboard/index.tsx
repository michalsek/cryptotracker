import React, { useContext, useLayoutEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';

import StyledText from '../../components/Layout/StyledText';
import AssetSummaryItem from '../../components/Crypto/AssetSummaryItem';
import { Asset, RootStackParamList } from '../../types';
import { StoreContext } from '../../Store';

export default function DashboardScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Dashboard'>) {
  const [state] = useContext(StoreContext);

  function onAddAsset() {
    navigation.navigate('AssetForm', {
      title: 'Add Asset',
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={onAddAsset}
          style={styles.addButtonContainer}
        >
          <View>
            <StyledText style={styles.addButton}>+</StyledText>
          </View>
        </TouchableOpacity>
      ),
    });
  });

  function keyExtractor(asset: Asset) {
    return `${asset.id}`;
  }

  function renderAsset(params: { item: Asset }) {
    return <AssetSummaryItem asset={params.item} onPress={() => {}} />;
  }

  return (
    <FlatList
      data={state.assets}
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
  addButtonContainer: {
    marginRight: 20,
  },
  addButton: {
    fontSize: 34,
  },
});
