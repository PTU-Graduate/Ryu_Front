import React, {useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {RegiPassProp} from '../../utils/navigationProps/RegiNavigationProps';

const RegiPass: React.FC<RegiPassProp> = ({navigation, route}) => {
  const [pass, setPass] = useState<string>('');

  const {MEMB_ID, SALT} = route.params;

  return (
    <AllBackground>
      <RegiCommonScreen
        mediumtext="비밀번호"
        smalltext="를 입력해주세요."
        inputtext="비밀번호"
        onPress={() => navigation.navigate('RegiEmail')}
      />
    </AllBackground>
  );
};

export default RegiPass;
