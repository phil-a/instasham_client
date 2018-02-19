import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'
import { iconsLoaded, iconsMap } from './utils/themes'
registerScreens()

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this._initApp()); 
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feeds',
          screen: 'instasham_client.FeedsScreen',
          title: 'Feeds',
          icon: iconsMap.home
        },
        {
          label: 'Explore',
          screen: 'instasham_client.ExploreScreen',
          title: 'Explore',
          icon: iconsMap['ios-search']
        }
      ]
    })
  }
}