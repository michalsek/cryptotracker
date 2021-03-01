import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { View, ViewProps } from './Themed';

export default function Screen(props: ViewProps) {
  return (
    <View {...props} style={[[styles.screen, props.style]]}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
