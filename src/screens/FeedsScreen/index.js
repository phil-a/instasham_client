import React, { Component } from 'react';
import { View, Text } from 'react-native';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PhotoCard } from '../../components';

class FeedsScreen extends Component {
  state = { }
  render() {
    console.log('props', this.props)
    return (
      <View>
        <PhotoCard />
      </View>
    );
  }
}

const getPhotos = gql`
  query {
    photos {
      id
      imageUrl
      caption
    }
  }
`

export default graphql(getPhotos)(FeedsScreen);