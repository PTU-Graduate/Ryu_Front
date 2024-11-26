import React, {useEffect, useState} from 'react';
import {RegiCommonScreen} from '../../components/RegiCommonScreen/RegiCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../../navigations/StackNavigator';
import {RegiEmailProp} from '../../utils/navigationProps/RegiNavigationProps';
import {mailCheck} from '../../services/_private/Regi/RegiApi';
import {getSaltUserData} from '../../utils/DataTableSet/RegiData/RegiBasicDataSaveResult';
import {stdInfoSave} from '../../services/_private/Regi/RegiApi';
import {EmailAuthCodeSend} from '../../services/_private/Regi/.RegiEmailAuth';
import {hashpass} from '../../utils/_private/.secure/.CryptoFuntion';
import {RegiEmailScreen} from '../../components/RegiCommonScreen/RegiEmailScreen';
const RegiEmail: React.FC<RegiEmailProp> = ({navigation, route}) => {
  const [email, setEmail] = useState<string>('');
  const [id, setID] = useState<string>('');
  const [salt, setSalt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지 상태

  const {PASS, STD_NUM} = route.params;

  useEffect(() => {
    const userData = getSaltUserData();
    console.log('비밀번호', PASS);
    if (userData && userData.MEMB_ID && userData.SALT) {
      setID(userData.MEMB_ID);
      setSalt(userData?.SALT);
    }
    console.log(PASS);
  }, []);

  const handleRegi = async () => {
    setIsLoading(true);
    const result = await mailCheck(email);
    if (result !== null && result.RSLT_CD === '00') {
      console.log('이메일 중복 없음');
      const HASHPASS = hashpass(PASS, salt);
      const result = await stdInfoSave(id, STD_NUM, email, HASHPASS);
      if (result !== null && result.RSLT_CD === '00') {
        console.log('기본정보 저장 정상');
        const result = await EmailAuthCodeSend(id);
        console.log('코드발송');
        if (result !== null && result.RSLT_CD === '00') {
          console.log('랜덤코드 생성 완료');
          setIsLoading(false);
          navigation.navigate('RegiCodeConfig');
          console.log('화면 이동');
        }
      }
    } else {
      setErrorMessage(result?.ERR_MSG || '이미 등록되어 있는 이메일 입니다.');
      setIsLoading(false);
    }
  };

  return (
    <AllBackground>
      <RegiEmailScreen
        value={email}
        onChangeText={text => setEmail(text)}
        mediumtext="평택대학교 이메일"
        smalltext="을 입력해주세요."
        inputtext="평택대학교 이메일@ptu.ac.kr"
        onPress={handleRegi}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </AllBackground>
  );
};

export default RegiEmail;
