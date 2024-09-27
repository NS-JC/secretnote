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
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>SCAN</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>문제를 사진찍으면</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../img/onboarding2.png')} style={{ width: wp('80%'), height: hp('40%') }} />,
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Learn More</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>정답 + 해설 + 비슷한 문제를 AI가 만들어줘요!</Text>,
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../img/onboarding3.png')} style={{ width: wp('80%'), height: hp('40%') }} />,
          title: <Text style={{ fontSize: hp('3%'), textAlign: 'center' }}>Get Started!</Text>,
          subtitle: <Text style={{ fontSize: hp('2%'), textAlign: 'center' }}>지금바로 성적을 향상시켜 보세요!</Text>,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
