import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
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
