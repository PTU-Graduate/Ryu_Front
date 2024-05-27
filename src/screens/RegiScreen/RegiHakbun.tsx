import React, {useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {regiHakbunApiCall} from '../../services/_private/Regi/RegiApi';

const RegiHakbun: React.FC<ScreenProps> = ({navigation}) => {
  const [std_num, setStd_num] = useState<string>(''); // 초기값은 아무것도 없어야함 -> 사용자가 입력한 값이 들어가야하기에 (메모리 낭비 방지)

  const handleRegi = async () => {
    console.log(std_num);
    const result = await regiHakbunApiCall(std_num);
    if (result !== null && result.RSLT_CD === '00') {
    } else {
    }
  };
  return (
    <AllBackground>
      <RegiCkeckCommonScreen
        value={std_num}
        onChangeText={text => setStd_num(text)}
        mediumtext="학번"
        smalltext="을 입력해주세요."
        inputtext="학번"
        CheckonPress={handleRegi}
        onPress={() => navigation.navigate('RegiName')}
      />
    </AllBackground>
  );
};

export default RegiHakbun;
