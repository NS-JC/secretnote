import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { StyleSheet, View ,Image } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CommunityMain from './screen/CommunityStackScreens/CommunityMain';
import CommunityWriting from './screen/CommunityStackScreens/CommunityWriting';

import SettingCoinCenter from './screen/SettingStackScreens/SettingCoinCenter';
import SettingInvite from './screen/SettingStackScreens/SettingInvite';
import SettingMain from './screen/SettingStackScreens/SettingMain';
import SettingMyContents from './screen/SettingStackScreens/SettingMyContents';
import SettingProfile from './screen/SettingStackScreens/SettingProfile';

import StudyMain from './screen/StudyStackScreens/StudyMain';
import StudyTest from './screen/StudyStackScreens/StudyTest';

import UploadChecking from './screen/UploadStackScreens/UploadChecking';
import UploadMain from './screen/UploadStackScreens/UploadMain';

import LoginScreen from './screen/LoginScreen';


const Stack = createStackNavigator();
const CommunityStack = createStackNavigator();
const StudyStack = createStackNavigator();
const SettingStack = createStackNavigator();
const UploadStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const UploadStackScreen = () => {
  return (
    <Stack.Navigator>
      <UploadStack.Screen name="Upload" component={UploadMain} />
      <UploadStack.Screen name="Checking" component={UploadChecking} />
    </Stack.Navigator>
  );
};

const StudyStackScreen = () => {
  return (
    <Stack.Navigator>
      <StudyStack.Screen name="Study" component={StudyMain} />
      <StudyStack.Screen name="Test" component={StudyTest} />
    </Stack.Navigator>
  );
};

const CommunityStackScreen = () => {
  return (
    <Stack.Navigator>
      <CommunityStack.Screen name="Community" component={CommunityMain} />
      <CommunityStack.Screen name="Writing" component={CommunityWriting} />
    </Stack.Navigator>
  );
};

const SettingStackScreen = () => {
  return (
    <Stack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingMain} />
      <SettingStack.Screen name="Profile" component={SettingProfile} />
      <SettingStack.Screen name="CoinCenter" component={SettingCoinCenter} />
      <SettingStack.Screen name="Invite" component={SettingInvite} />
      <SettingStack.Screen name="MyContents" component={SettingMyContents} />
    </Stack.Navigator>
  );
};


const MainTabScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="UploadStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'StudyStack') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'UploadStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SettingStack') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'CommunityStack') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="UploadStack" component={UploadStackScreen} />
      <Tab.Screen name="StudyStack" component={StudyStackScreen} />
      <Tab.Screen name="CommunityStack" component={CommunityStackScreen} />
      <Tab.Screen name="SettingStack" component={SettingStackScreen} />
    </Tab.Navigator>
  );
};


// Stack Navigator for Login and Register and Logout Screen
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* if you want to use splash screen then activate below and add splach screen
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          // i have no idea what this is below
          // options={({route}) => ({
          //   headerTitle: getHeaderTitle(route),
          // })}
          component={MainTabScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});