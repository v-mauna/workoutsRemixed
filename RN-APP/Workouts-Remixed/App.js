import * as React from 'react';
import { AppRegistry } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'
import GuestHomePage from './components/GuestHomePage'
import ProgramLibrary from './components/ProgramsLibrary'
import TargetAreasLibrary from './components/TargetAreasLibrary'
import TargetArea from './components/TargetArea'
import SelectedProgram from './components/SelectedProgram'
import CustomLibrary from './components/Custom_Library'
import ProgramWorkoutCard from './components/ProgramWorkoutCard'
import SelectedLibrary from './components/SelectedLibrary'
import { createBottomTabNavigator } from 'react-navigation-tabs';


const HomeNavigator = createStackNavigator({
  GuestHomePage: {screen: GuestHomePage},
  ProgramLibrary: {screen: ProgramLibrary},
  TargetAreasLibrary: {screen: TargetAreasLibrary},
  CustomLibrary: {screen: CustomLibrary}
})

const ProgramsNavigator = createStackNavigator({
  ProgramLibrary: {screen: ProgramLibrary},
  SelectedProgram: {screen: SelectedProgram},
  TargetAreaLibrary: {screen: TargetAreasLibrary},
  TargetArea: {screen: TargetArea},
  CustomLibrary: {screen: CustomLibrary},
  ProgramWorkoutCard: {screen: ProgramWorkoutCard},
  SelectedLibrary: {screen: SelectedLibrary}
})

const LibraryNavigator = createStackNavigator({
  CustomLibrary: {screen: CustomLibrary},
  TargetAreaLibrary: {screen: TargetAreasLibrary},
  TargetArea: {screen: TargetArea},
  ProgramLibrary: {screen: ProgramLibrary},
});

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Programs: ProgramsNavigator,
  Library: LibraryNavigator
})



export default createAppContainer(BottomTabNavigator);