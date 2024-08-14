import CommunityMain from './screen/SettingStackScreens/CommunityMain';
import CommunityWriting from './screen/SettingStackScreens/CommunityWriting';

import SettingCoinCenter from './screen/SettingStackScreens/SettingCoinCenter';
import SettingInvite from './screen/SettingStackScreens/SettingInvite';
import SettingMain from './screen/SettingStackScreens/SettingMain';
import SettingMyContents from './screen/SettingStackScreens/SettingMyContents';
import SettingProfile from './screen/SettingStackScreens/SettingProfile';

import StudyMain from './screen/SettingStackScreens/StudyMain';
import StudyTest from './screen/SettingStackScreens/StudyTest';

import UploadChecking from './screen/SettingStackScreens/UploadChecking';
import UploadMain from './screen/SettingStackScreens/UploadMain';


import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './screen/GoogleLogin';


const Stack = createStackNavigator();
const CommunityStack = createStackNavigator();
const StudyStack = createStackNavigator();
const SettingStack = createStackNavigator();
const UploadStack = createStackNavigator();
const Tab = createBottomTabNavigator();


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
      <SettingStack.Screen name="CoinCenter" component={SettingCoinCenter} />
      <SettingStack.Screen name="Invite" component={SettingInvite} />
      <SettingStack.Screen name="Setting" component={SettingMain} />
      <SettingStack.Screen name="MyContents" component={SettingMyContents} />
      <SettingStack.Screen name="Profile" component={SettingProfile} />
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

const UploadStackScreen = () => {
  return (
    <Stack.Navigator>
      <UploadStack.Screen name="Checking" component={UploadChecking} />
      <UploadStack.Screen name="Upload" component={UploadMain} />
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
          } else if (route.name === 'Communitytack') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'lightgray',
        showLabel: false,
      }}>
      <Tab.Screen name="Communitytack" component={CommunityStackScreen} />
      <Tab.Screen name="SettingStack" component={SettingStackScreen} />
      <Tab.Screen name="StudyStack" component={StudyStackScreen} />
      <Tab.Screen name="UploadStack" component={UploadStackScreen} />
    </Tab.Navigator>
  );
};



export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});