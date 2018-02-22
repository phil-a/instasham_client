import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '@appandflow/touchable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { makeHitSlop } from '../../utils/themes';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 16,
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyView: {
    flex: 1.75,
  },
  bookmarkWrapper: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
})

class ActionButtons extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionsWrapper}>
          <Touchable hitSlop={makeHitSlop(10)} feedback="opacity" style={styles.actionBtn}>
            <Ionicons name="ios-heart-outline" size={30} />
          </Touchable>
          <Touchable hitSlop={makeHitSlop(10)} feedback="opacity" style={styles.actionBtn}>
            <EvilIcons name="comment" size={35} />
          </Touchable>
          <Touchable feedback="opacity" style={styles.actionBtn}>
            <Ionicons name="ios-send-outline" size={35} />
          </Touchable>
        </View>
        <View style={styles.emptyView}></View>
        <Touchable hitSlop={makeHitSlop(10)} feedback="opacity" style={styles.bookmarkWrapper}>
          <Ionicons name="ios-bookmark-outline" size={35} />
        </Touchable>
      </View>
    );
  }
}

export default ActionButtons;