import React, {useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';

const RegiHakgua: React.FC<ScreenProps> = ({navigation}) => {
  const [STD_DEP_CD, setSTD_DEP_CD] = useState<string>('');
  return (
    <AllBackground>
      <RegiCommonScreen
        value={STD_DEP_CD}
        onChangeText={text => setSTD_DEP_CD(text)}
        mediumtext="학과"
        smalltext="를 입력해주세요."
        inputtext="학과"
        onPress={() =>
          navigation.navigate('RegiHakbun', {STD_DEC_CD: STD_DEP_CD})
        }
      />
    </AllBackground>
  );
};

export default RegiHakgua;
