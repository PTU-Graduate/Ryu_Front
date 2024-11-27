import React, {useEffect, useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {getSaltUserData} from '../../utils/DataTableSet/RegiData/RegiBasicDataSaveResult';
import {EmailAuthCodeVerify} from '../../services/_private/Regi/.RegiEmailAuth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegiCodeConfig: React.FC<ScreenProps> = ({navigation}) => {
  const [crecode, setCreCode] = useState<string>('');
  const [id, setId] = useState<string>('');

  useEffect(() => {
    const userData = getSaltUserData();
    if (userData && userData.MEMB_ID) {
      setId(userData?.MEMB_ID);
    }
  }, []);

  const handleConfig = async () => {
    const result = await EmailAuthCodeVerify(id, crecode);
    if (result !== null && result.RSLT_CD === '00') {
      navigation.navigate('RegiComple');
    }
  };
  return (
    <AllBackground>
      <KeyboardAwareScrollView>
        <RegiCommonScreen
          value={crecode}
          onChangeText={text => setCreCode(text)}
          mediumtext="인증번호"
          smalltext="를 입력해주세요."
          inputtext="인증번호"
          onPress={handleConfig}
        />
      </KeyboardAwareScrollView>
    </AllBackground>
  );
};

export default RegiCodeConfig;
