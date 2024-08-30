import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CommunityMain from './src/screen/CommunityStackScreens/CommunityMain';
import CommunityWriting from './src/screen/CommunityStackScreens/CommunityWriting';
import CommunityComment from './src/screen/CommunityStackScreens/CommunityComment';

import SettingCoinCenter from './src/screen/SettingStackScreens/SettingCoinCenter';
import SettingInvite from './src/screen/SettingStackScreens/SettingInvite';
import SettingMain from './src/screen/SettingStackScreens/SettingMain';
import SettingMyContents from './src/screen/SettingStackScreens/SettingMyContents';
import SettingReadMyContents from './src/screen/SettingStackScreens/SettingReadMyContents';
import SettingProfile from './src/screen/SettingStackScreens/SettingProfile';
import SettingNotification from './src/screen/SettingStackScreens/SettingNotification';
import SettingCoupon from './src/screen/SettingStackScreens/SettingCoupon';

import StudyMain from './src/screen/StudyStackScreens/StudyMain';
import StudyTest from './src/screen/StudyStackScreens/StudyTest';

import UploadMain from './src/screen/UploadStackScreens/UploadMain';
import UploadChecking from './src/screen/UploadStackScreens/UploadChecking';

import LoginScreen from './src/screen/LoginScreen';

import { NoticesProvider } from './src/context/NoticesContext';
import { StudyProvider } from './src/context/StudyContext';


const Stack = createStackNavigator();
const CommunityStack = createStackNavigator();
const StudyStack = createStackNavigator();
const SettingStack = createStackNavigator();
const UploadStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const UploadStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <UploadStack.Screen
        name="Upload"
        component={UploadMain}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Upload', // Set the title for the header
          headerTitleStyle: {
            fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
          },
          headerStyle: {
            height: hp('10%'), // Adjust the height as needed, using a responsive unit
          },
        })}
      />
      <UploadStack.Screen name="Checking" component={UploadChecking} />
    </Stack.Navigator>
  );
};

const StudyStackScreen = () => {
  return (
    <StudyProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name="StudyStack" 
          component={StudyMain}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitleAlign: 'center',
            title: 'Questions', // Set the title for the header
            headerTitleStyle: {
              fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
            },
            headerStyle: {
              height: hp('10%'), // Adjust the height as needed, using a responsive unit
            },
          })}  />
        <Stack.Screen 
          name="Test" 
          component={StudyTest}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Review',
            headerTitleStyle: {
              fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
            },
            headerStyle: {
              height: hp('10%'), // Adjust the height as needed, using a responsive unit
            },
          })}
        />
      </Stack.Navigator>
    </StudyProvider>
  );
};

const CommunityStackScreen = () => {
  return (
    <NoticesProvider>
      <Stack.Navigator>
        <CommunityStack.Screen 
          name="CommunityStack" 
          component={CommunityMain}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitleAlign: 'center',
            title: 'Community', // Set the title for the header
            headerTitleStyle: {
              fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
            },
            headerStyle: {
              height: hp('10%'), // Adjust the height as needed, using a responsive unit
            },
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Writing')}
                style={{ marginRight: wp('4%') }} // Responsive margin using width percentage
              >
                <Icon name="pencil-square-o" size={hp('4%')} color="#007AFF" />
              </TouchableOpacity>
            ),
          })}
        />
        <CommunityStack.Screen 
          name="Writing" 
          component={CommunityWriting}
          options={{ headerTitleAlign: 'center',
          }}
        />

        <CommunityStack.Screen 
          name="Comment" 
          component={CommunityComment} 
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            // headerLeft: () => (
            //   <TouchableOpacity 
            //     onPress={() => navigation.goBack()} 
            //     style={{ 
            //       marginLeft: wp('4%'), 
            //       flexDirection: 'row', 
            //       alignItems: 'center' 
            //     }}
            //   >
            //     <Ionicons name="chevron-back" size={wp('6%')} color="#007AFF" /> 
            //     <Text 
            //       style={{ 
            //         color: '#007AFF', 
            //         fontSize: wp('4.5%'),
            //         alignSelf: 'center'
            //       }}
            //     >
            //       뒤로
            //     </Text>
            //   </TouchableOpacity>
            // ),
          })}
        />
      </Stack.Navigator>
    </NoticesProvider>
  );
};

const SettingStackScreen = () => {
  return (
    <NoticesProvider>
      <Stack.Navigator>
        <SettingStack.Screen
          name="SettingStack" 
          component={SettingMain}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitleAlign: 'center',
            title: 'Settings', // Set the title for the header
            headerTitleStyle: {
              fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
            },
            headerStyle: {
              height: hp('10%'), // Adjust the height as needed, using a responsive unit
            },
          })} 
        />
        <SettingStack.Screen name="Profile" component={SettingProfile} />
        <SettingStack.Screen name="CoinCenter" component={SettingCoinCenter} />
        <SettingStack.Screen name="Coupon" component={SettingCoupon} />
        <SettingStack.Screen name="MyContents" component={SettingMyContents} />
        <SettingStack.Screen name="ReadMyContents" component={SettingReadMyContents} />
        <SettingStack.Screen name="Notification" component={SettingNotification} />
        <SettingStack.Screen name="Invite" component={SettingInvite} />
      </Stack.Navigator>
    </NoticesProvider>
  );
};


const MainTabScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="UploadStack"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Study') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'lightgray',
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Camera" component={UploadStackScreen} />
      <Tab.Screen name="Study" component={StudyStackScreen} />
      <Tab.Screen name="Community" component={CommunityStackScreen} />
      <Tab.Screen name="Settings" component={SettingStackScreen} />
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
          headerShown: false,
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