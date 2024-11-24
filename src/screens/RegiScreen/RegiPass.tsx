import React, {useEffect, useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {RegiPassProp} from '../../utils/navigationProps/RegiNavigationProps';
import {getSaltUserData} from '../../utils/DataTableSet/RegiData/RegiBasicDataSaveResult';
import {hashpass} from '../../utils/_private/.secure/.CryptoFuntion';

const RegiPass: React.FC<RegiPassProp> = ({navigation, route}) => {
  const [pass, setPass] = useState<string>('');
  const [hashpassw, setHashpassw] = useState<string>('');
  const [salt, setSalt] = useState<string>('');
  const {STD_NUM} = route.params;

  useEffect(() => {
    const userData = getSaltUserData();
    if (userData && userData.SALT) {
      setSalt(userData.SALT); // SALT 값을 상태로 저장
    }
  }, []);

  const handlenext = async () => {
    const hash = await hashpass(pass, salt);
    setHashpassw(hash);
    navigation.navigate('RegiEmail', {PASS: pass, STD_NUM: STD_NUM});
    console.log('해싱 비밀번호 : ', hashpassw);
  };

  return (
    <AllBackground>
      <RegiCommonScreen
        value={pass}
        onChangeText={text => setPass(text)}
        mediumtext="비밀번호"
        smalltext="를 입력해주세요."
        inputtext="비밀번호"
        onPress={handlenext}
      />
    </AllBackground>
  );
};

export default RegiPass;
