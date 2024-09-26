import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import StoreMain from './src/screen/StoreStackScreens/StoreMain';
import StoreCoinCenter from './src/screen/StoreStackScreens/StoreMain';

import CommunityMain from './src/screen/CommunityStackScreens/CommunityMain';
import CommunityWriting from './src/screen/CommunityStackScreens/CommunityWriting';
import CommunityComment from './src/screen/CommunityStackScreens/CommunityComment';

import SettingMain from './src/screen/SettingStackScreens/SettingMain';
import SettingProfile from './src/screen/SettingStackScreens/SettingProfile';
import SettingMyContents from './src/screen/SettingStackScreens/SettingMyContents';
import SettingReadMyContents from './src/screen/SettingStackScreens/SettingReadMyContents';
import SettingSystem from './src/screen/SettingStackScreens/SettingSystem';
import SettingNotification from './src/screen/SettingStackScreens/SettingNotification';
import SettingNotice from './src/screen/SettingStackScreens/SettingNotice';
import SettingPaymentHistory from './src/screen/SettingStackScreens/SettingPaymentHistory';
import SettingAppInfo from './src/screen/SettingStackScreens/SettingAppInfo';
import SettingPrivacyPolicy from './src/screen/SettingStackScreens/SettingPrivacyPolicy';
import SettingRefundPolicy from './src/screen/SettingStackScreens/SettingRefundPolicy';

import StudyMain from './src/screen/StudyStackScreens/StudyMain';
import StudyTest from './src/screen/StudyStackScreens/StudyTest';
import StudyFolder from './src/screen/StudyStackScreens/StudyFolder';

import UploadMain from './src/screen/UploadStackScreens/UploadMain';
import UploadChecking from './src/screen/UploadStackScreens/UploadChecking';

import LoginScreen from './src/screen/LoginScreen';

import { NoticesProvider } from './src/context/NoticesContext';
import { StudyProvider } from './src/context/StudyContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import OnboardingScreen from './src/screen/OnboardingScreen';

const Stack = createStackNavigator();
const CommunityStack = createStackNavigator();
const StudyStack = createStackNavigator();
const SettingStack = createStackNavigator();
const UploadStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StoreStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StoreStack"
        component={StoreMain}
        options={({ navigation }) => ({
          headerShown: false,
          headerTitleAlign: 'center',
          title: 'Store', // Set the title for the header
          headerTitleStyle: {
            fontSize: hp('3%'), // Adjust the size as needed, using a responsive unit
          },
          headerStyle: {
            height: hp('10%'), // Adjust the height as needed, using a responsive unit
          },
        })}
      />
      <SettingStack.Screen name="CoinCenter" component={StoreCoinCenter} />
    </Stack.Navigator>
  );
};

const UploadStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <UploadStack.Screen
        name="UploadStack"
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
        <StudyStack.Screen 
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
        <StudyStack.Screen 
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
        <StudyStack.Screen 
          name="StudyFolder" 
          component={StudyFolder}
          options={({ navigation }) => ({
            headerTitleAlign: 'center',
            title: 'Bookmark',
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
        <SettingStack.Screen name="MyContents" component={SettingMyContents} />
        <SettingStack.Screen name="ReadMyContents" component={SettingReadMyContents} />
        <SettingStack.Screen name="Notification" component={SettingNotification} />
        <SettingStack.Screen name="System" component={SettingSystem} />
        <SettingStack.Screen name="Notice" component={SettingNotice} />
        <SettingStack.Screen name="PaymentHistory" component={SettingPaymentHistory} />
        <SettingStack.Screen name="AppInfo" component={SettingAppInfo} />
        <SettingStack.Screen name="PrivacyPolicy" component={SettingPrivacyPolicy} />
        <SettingStack.Screen name="RefundPolicy" component={SettingRefundPolicy} />
      </Stack.Navigator>
    </NoticesProvider>
  );
};


const MainTabScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Study') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Camera') {
            iconName = 'circle-plus';
            IconComponent = FontAwesome6;
            return (
              <IconComponent name={iconName} size={hp('4.5%')} color="#007AFF" />
            );
          } else if (route.name === 'Settings') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'lightgray',
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   paddingHorizontal: wp('3%'),
        //   height: hp('8%'),
        // }, 이거 넣고싶은데 이렇게 하면 다른 창에 들어갔다가 뒤로가기 눌러서 나왔을 때 반영이 안된상태로 보임 그래서 일단 뺌
      })}
    >
      <Tab.Screen name="Study" component={StudyStackScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Community" component={CommunityStackScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Camera" component={UploadStackScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Store" component={StoreStackScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Settings" component={SettingStackScreen} options={{ unmountOnBlur: true }} />
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

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        await AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };
    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Add a loading screen here if needed
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
          <Stack.Screen name="MainTab" component={MainTabScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        <FlashMessage position="bottom" />
      </NavigationContainer>
    );
  } else {

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
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});