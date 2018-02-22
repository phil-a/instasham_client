import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { iOSColors } from 'react-native-typography';
import Touchable from '@appandflow/touchable';
import { fakeAvatar } from '../utils/constants';
import { makeHitSlop, makeCircle } from '../utils/themes';

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    flex: 0.1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  avatar: {
    ...makeCircle(30)
  },
  inputWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '95%',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: iOSColors.lightGray2,
    borderRadius: 20,
  },
  inputText: {
    color: iOSColors.lightGray2
  }
})

class CommentInput extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.avatarWrapper}>
          <Image source={{uri: fakeAvatar}} style={styles.avatar} />
        </View>
        <Touchable feedback="opacity" hitSlop={makeHitSlop(20)} style={styles.inputWrapper}>
          <View style={styles.input}>
            <Text style={styles.inputText}>Add a comment ...</Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

export default CommentInput;