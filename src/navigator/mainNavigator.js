import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings214424Navigator from '../features/Settings214424/navigator';
import Settings214409Navigator from '../features/Settings214409/navigator';
import NotificationList214408Navigator from '../features/NotificationList214408/navigator';
import Maps214407Navigator from '../features/Maps214407/navigator';
import UserProfile214406Navigator from '../features/UserProfile214406/navigator';
import Maps214387Navigator from '../features/Maps214387/navigator';
import Settings214365Navigator from '../features/Settings214365/navigator';
import Settings214350Navigator from '../features/Settings214350/navigator';
import NotificationList214349Navigator from '../features/NotificationList214349/navigator';
import Maps214348Navigator from '../features/Maps214348/navigator';
import UserProfile214347Navigator from '../features/UserProfile214347/navigator';
import Maps214328Navigator from '../features/Maps214328/navigator';
import Settings214306Navigator from '../features/Settings214306/navigator';
import Settings214291Navigator from '../features/Settings214291/navigator';
import NotificationList214290Navigator from '../features/NotificationList214290/navigator';
import Maps214289Navigator from '../features/Maps214289/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings214424: { screen: Settings214424Navigator },
Settings214409: { screen: Settings214409Navigator },
NotificationList214408: { screen: NotificationList214408Navigator },
Maps214407: { screen: Maps214407Navigator },
UserProfile214406: { screen: UserProfile214406Navigator },
Maps214387: { screen: Maps214387Navigator },
Settings214365: { screen: Settings214365Navigator },
Settings214350: { screen: Settings214350Navigator },
NotificationList214349: { screen: NotificationList214349Navigator },
Maps214348: { screen: Maps214348Navigator },
UserProfile214347: { screen: UserProfile214347Navigator },
Maps214328: { screen: Maps214328Navigator },
Settings214306: { screen: Settings214306Navigator },
Settings214291: { screen: Settings214291Navigator },
NotificationList214290: { screen: NotificationList214290Navigator },
Maps214289: { screen: Maps214289Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
