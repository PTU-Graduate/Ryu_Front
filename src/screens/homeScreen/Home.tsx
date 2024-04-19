import {Text} from 'react-native';
import React from 'react';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';

const Home = () => {
  const userData = getUserData();
  return (
    <AllBackground>
      <Text>{userData?.NAME}이름</Text>
      <Text>{userData?.GRADE}학년</Text>
      <Text>{userData?.STD_DEP_CD}학과코드</Text>
      <Text>{userData?.STD_NUM}학과이름</Text>
    </AllBackground>
  );
};

export default Home;
