import { Navigation } from 'react-native-navigation'

import FeedsScreen from './FeedsScreen'
import ExploreScreen from './ExploreScreen'

export const registerScreens = () => {
  Navigation.registerComponent('instasham_client.FeedsScreen', () => FeedsScreen)
  Navigation.registerComponent('instasham_client.ExploreScreen', () => ExploreScreen)
}