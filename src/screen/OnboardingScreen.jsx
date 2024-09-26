import React from 'react';
import { Image, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Auth')}
      onDone={() => navigation.replace('Auth')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../img/onboarding1.png')} style={{ width: wp('80%'), height: hp('40%') }} />,
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Welcome to Our App!</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>Explanation text 1</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../img/onboarding2.png')} style={{ width: wp('80%'), height: hp('40%') }} />,
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Learn More</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>Explanation text 2</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../img/onboarding3.png')} style={{ width: wp('80%'), height: hp('40%') }} />,
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Get Started!</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>Explanation text 3</Text>,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
