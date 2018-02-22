import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights } from 'react-native-typography';

import { makeCircle, makeHitSlop } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  userMetaWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  btnWrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    ...makeCircle(40)
  },
  userInfoWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  username: {
    color: 'black',
    ...human.subheadObject
  },
  location: {
    color: 'black',
    ...human.footnoteObject,
    ...systemWeights.light,
  }
})

export default function Header({
  avatar = fakeAvatar,
  username = 'Jon Snow',
  location = 'Winterfell, Seven Kingdoms'
}) {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{uri: avatar}} style={styles.avatarImg} />
        </View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <Touchable hitSlop={makeHitSlop(20)} feedback="opacity" style={styles.btnWrapper}>
        <MaterialCommunityIcons name="dots-horizontal" size={25} />
      </Touchable>
    </View>
  )
}