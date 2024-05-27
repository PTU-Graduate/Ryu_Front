import React, {useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {regiIDApiCall} from '../../services/_private/Regi/RegiApi';

const RegiID: React.FC<ScreenProps> = ({navigation}) => {
  const [std_id, setStd_id] = useState<string>('');

  const handleRegi = async () => {
    console.log(std_id);
    const result = await regiIDApiCall(std_id);
    if (result !== null && result.RSLT_CD === '00') {
    } else {
    }
  };
  return (
    <AllBackground>
      <RegiCkeckCommonScreen
        value={std_id}
        onChangeText={text => setStd_id(text)}
        mediumtext="아이디"
        smalltext="를 입력해주세요."
        inputtext="아이디"
        CheckonPress={handleRegi}
        onPress={() => navigation.navigate('RegiPass')}
      />
    </AllBackground>
  );
};

export default RegiID;
