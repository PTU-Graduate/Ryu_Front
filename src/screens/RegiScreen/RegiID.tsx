import React, {useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {regiIDApiCall} from '../../services/_private/Regi/RegiApi';

const RegiID: React.FC<ScreenProps> = ({navigation}) => {
  const [std_id, setStd_id] = useState<string>('');
  const [butOnOff, setButOnOff] = useState<boolean>(true);

  const handleRegi = async () => {
    console.log(std_id);
    const result = await regiIDApiCall(std_id);
    if (result !== null && result.RSLT_CD === '00') {
      setButOnOff(false);
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
        placeholder="아이디"
        CheckonPress={handleRegi}
        disable={butOnOff}
        onPress={() => navigation.navigate('RegiPass')}
      />
    </AllBackground>
  );
};

export default RegiID;
