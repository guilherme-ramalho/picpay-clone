import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './screens/Home';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import Wallet from './screens/Wallet';

const TabNavigator = createBottomTabNavigator({
  Home,
  Wallet,
  Notifications,
  Settings,
});

export default createAppContainer(TabNavigator);
