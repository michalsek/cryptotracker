import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[styles.text, props.style, { fontFamily: 'space-mono' }]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});
