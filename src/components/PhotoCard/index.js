import React, { Component } from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import Touchable from '@appandflow/touchable';
import { human, iOSColors } from 'react-native-typography';

import { fakeImage } from '../../utils/constants';
import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import CommentInput from '../CommentInput';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 10,
  },
  img: {
    flex: 1,
    height: 300,
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16,
  },
  commentViewAll: {
    ...human.calloutObject,
    color: iOSColors.midGray, 
  },
  timeAgoWrapper: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  timeAgo: {
    ...human.footnoteObject,
    color: iOSColors.midGray,
  }
})

class PhotoCard extends Component {
  state = {  }
  render() {
    return (
      <ScrollView style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{ uri: this.props.data.imageUrl }}
        />
        <ActionButtons />
        <Meta caption={this.props.data.caption} />
        <View style={styles.commentsWrapper}>
          <Touchable feedback="opacity">
            <Text style={styles.commentViewAll}>View all 13 comments</Text>
          </Touchable>
          <CommentInput />
        </View>
        <View style={styles.timeAgoWrapper}>
          <Text style={styles.timeAgo}>5 hours ago</Text>
        </View>
      </ScrollView>
    );
  }
}

export default PhotoCard;