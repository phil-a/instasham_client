import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'

registerScreens()

export default class Nav {
  constructor() {
    this._initApp()
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feeds',
          screen: 'instasham_client.FeedsScreen',
          title: 'Feeds'
        },
        {
          label: 'Explore',
          screen: 'instasham_client.ExploreScreen',
          title: 'Explore'
        }
      ]
    })
  }
}