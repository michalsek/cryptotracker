import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput, TextInputProps } from './Themed';

export default function MonoTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style, { fontFamily: 'space-mono' }]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
