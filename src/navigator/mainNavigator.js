import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings161340Navigator from '../features/Settings161340/navigator';
import UserProfile161333Navigator from '../features/UserProfile161333/navigator';
import Settings161332Navigator from '../features/Settings161332/navigator';
import Settings161330Navigator from '../features/Settings161330/navigator';
import SignIn2161328Navigator from '../features/SignIn2161328/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings161340: { screen: Settings161340Navigator },
UserProfile161333: { screen: UserProfile161333Navigator },
Settings161332: { screen: Settings161332Navigator },
Settings161330: { screen: Settings161330Navigator },
SignIn2161328: { screen: SignIn2161328Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
