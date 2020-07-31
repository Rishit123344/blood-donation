import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import  NewDonorScreen from './Screens/NewDonorScreen'
import SearchScreen from './Screens/SearchScreen';
import CampScreen from './Screens/CampScreen';
import CampSearchScreen from './Screens/CampSearchScreen';
import { Transition } from 'react-native-reanimated';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen'

export default class app extends React.Component {
  render(){
  return (
   <AppContainer></AppContainer>
  );
}
}
const TabNavigator = createBottomTabNavigator({
 NewDonor:{screen:NewDonorScreen},
  Search:{screen: SearchScreen},
  Camp:{screen:CampScreen},
  CampSearch:{screen:CampSearchScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'NewDonor'){
        return(
          <Image source = {require('./assets/blood2.jpg')} style={{width:40,height:40}}/>
        )
      }
      else  if(routeName === 'Search'){
        return(
          <Image source = {require('./assets/search.jpg')} style={{width:40,height:40}}/>
        )
      }
      else  if(routeName === 'Camp'){
        return(
          <Image source = {require('./assets/blood3.jpg')} style={{width:40,height:40}}/>
        )
      }
      else  if(routeName === 'CampSearch'){
        return(
          <Image source = {require('./assets/logo.jpg')} style={{width:40,height:40}}/>
        )
      }
    }
  })
})
const SwitchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});