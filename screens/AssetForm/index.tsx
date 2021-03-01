import React, { useContext, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import RNPickerSelect from 'react-native-picker-select';
import { Button, StyleSheet } from 'react-native';
import { map as _map } from 'lodash';

import { RootStackParamList, CryptoType, Currency, Market } from '../../types';
import TextInput from '../../components/Layout/StyledTextInput';
import Text from '../../components/Layout/StyledText';
import Screen from '../../components/Layout/Screen';
import { StoreContext } from '../../Store';
import { Markets, Currencies } from '../../data';
import { ActionType } from '../../Store/types';

const currencies = _map(Currencies, (crr: Currency) => ({
  label: crr.name,
  value: crr.type,
}));

const markets = _map(Markets, (mrk: Market) => ({
  label: mrk.name,
  value: mrk.id,
}));

export default function AssetForm({
  navigation,
}: StackScreenProps<RootStackParamList, 'AssetForm'>) {
  const [_, dispatch] = useContext(StoreContext);
  const [currency, setCurrency] = useState<CryptoType>();
  const [market, setMarket] = useState<number>();
  const [amount, setAmount] = useState<string>();

  function onSubmit() {
    dispatch({
      type: ActionType.AddAsset,
      payload: {
        currency: currency!,
        marketId: market!,
        amount: parseFloat(amount!),
      },
    });
    navigation.goBack();
  }

  return (
    <Screen>
      <Text>Amount:</Text>
      <TextInput
        value={amount}
        placeholder="Amount"
        onChangeText={setAmount}
        keyboardType="decimal-pad"
        enablesReturnKeyAutomatically
        returnKeyType="done"
        style={styles.input}
      />
      <RNPickerSelect
        value={currency}
        onValueChange={setCurrency}
        items={currencies}
      />
      <RNPickerSelect
        value={market}
        onValueChange={setMarket}
        items={markets}
      />
      <Button
        onPress={onSubmit}
        title="Submit"
        disabled={!currency || !market || !amount}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
