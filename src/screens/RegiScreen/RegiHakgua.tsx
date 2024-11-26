import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {RegiHakguaScreen} from '../../components/RegiCommonScreen/RegiHakguaScreen';

const RegiHakgua: React.FC<ScreenProps> = ({navigation}) => {
  const [STD_DEP_CD, setSTD_DEP_CD] = useState<string>('');

  return (
    <AllBackground>
      <RegiHakguaScreen
        mediumtext="학과"
        smalltext="를 선택해주세요."
        setSelectedDepartment={(item: string) => setSTD_DEP_CD(item)} // 수정
        onPress={() =>
          navigation.navigate('RegiHakbun', {STD_DEC_CD: STD_DEP_CD})
        }
      />
    </AllBackground>
  );
};

export default RegiHakgua;
