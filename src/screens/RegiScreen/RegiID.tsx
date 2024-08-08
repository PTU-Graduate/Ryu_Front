import React, {useEffect, useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {regiIDApiCall} from '../../services/_private/Regi/RegiApi';
import {RegiIDProps} from '../../utils/navigationProps/RegiNavigationProps';

const RegiID: React.FC<RegiIDProps> = ({navigation, route}) => {
  const [std_id, setStd_id] = useState<string>('');
  const [salt, setSalt] = useState<string>(''); 
  const [butOnOff, setButOnOff] = useState<boolean>(true);

  const {STD_DEC_CD, STD_NUM, NAME} = route.params;

  useEffect(() => {
    console.log(STD_DEC_CD, STD_NUM, NAME);
  }, []);

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
        onPress={() => navigation.navigate('RegiPass', {MEMB_ID:std_id, SALT:salt})}
      />
    </AllBackground>
  );
};

export default RegiID;
