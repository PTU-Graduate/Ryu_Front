import {Text} from 'react-native';
import React from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {
  SignLogGrayButton,
  SignLogGreenButton,
} from '../components/AllSrcComponets/AllButtonCompo';
import {SignLogInput} from '../components/AllSrcComponets/AllInputCompo';

const Ex1 = () => {
  return (
    <AllBackground>
      <Text>Ex1adsadasdasads</Text>
      <SignLogGreenButton text="다음" />
      <SignLogGrayButton text="다음" />
      <SignLogInput text="비밀번호" />
    </AllBackground>
  );
};

export default Ex1;
