import React, {useEffect, useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {RegiNameProps} from '../../utils/navigationProps/RegiNavigationProps';

const RegiName: React.FC<RegiNameProps> = ({navigation, route}) => {
  const [name, setName] = useState<string>('');

  const {STD_DEC_CD, STD_NUM} = route.params;

  

  useEffect(() => {
    console.log(STD_DEC_CD, STD_NUM);
  }, []);

  return (
    <AllBackground>
      <RegiCommonScreen
        value={name}
        onChangeText={text => setName(text)}
        mediumtext="이름"
        smalltext="을 입력해주세요."
        inputtext="이름"
        onPress={() =>
          navigation.navigate('RegiID', {
            STD_DEC_CD: STD_DEC_CD,
            STD_NUM: STD_NUM,
            NAME: name,
          })
        }
      />
    </AllBackground>
  );
};

export default RegiName;
