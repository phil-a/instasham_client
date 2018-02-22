import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human, systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    minHeight: 50,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    ...human.footnoteObject,
    ...systemWeights.light
  }
})

export default function Meta({
  username = 'Jon Snow',
  caption = 'this is my beautiful girl',
}) {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Liked by <Text style={systemWeights.regular}>Tormund Giantsbane</Text> and{' '}
          <Text style={systemWeights.regular}>1,268 others</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          <Text style={systemWeights.regular}>{username}</Text> {caption}
        </Text>
      </View>
    </View>
  );
}