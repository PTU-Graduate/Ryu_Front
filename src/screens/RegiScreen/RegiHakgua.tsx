import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {RegiHakguaScreen} from '../../components/RegiCommonScreen/RegiHakguaScreen';

const RegiHakgua: React.FC<ScreenProps> = ({navigation}) => {
  const [STD_DEP_CD, setSTD_DEP_CD] = useState<string>('');

  return (
    <AllBackground>
      <RegiHakguaScreen
        value={STD_DEP_CD}
        onChangeText={text => setSTD_DEP_CD(text)}
        mediumtext="학과"
        smalltext="를 선택해주세요."
        inputtext="학과"
        onPress={() =>
          navigation.navigate('RegiHakbun', {STD_DEC_CD: STD_DEP_CD})
        }
      />
    </AllBackground>
  );
};

export default RegiHakgua;
