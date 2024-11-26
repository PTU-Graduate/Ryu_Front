import React, {useEffect, useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {
  regiIDApiCall,
  regiBasicDataSave,
} from '../../services/_private/Regi/RegiApi';
import {RegiIDProps} from '../../utils/navigationProps/RegiNavigationProps';

const RegiID: React.FC<RegiIDProps> = ({navigation, route}) => {
  const [std_id, setStd_id] = useState<string>('');
  const [salt, setSalt] = useState<string>('');
  const [butOnOff, setButOnOff] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태 관리
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지 상태

  const {STD_DEC_CD, STD_NUM, NAME} = route.params;

  useEffect(() => {
    console.log(STD_DEC_CD, STD_NUM, NAME);
    console.log('데이터정보학과');
  }, []);

  const handleRegi = async () => {
    setIsLoading(true); // 로딩 시작
    try {
      console.log(std_id);
      const result = await regiIDApiCall(std_id);
      if (result !== null && result.RSLT_CD === '00') {
        setButOnOff(false);
      } else {
        setErrorMessage(result?.ERR_MSG || '이미 등록되어 있는 아이디 입니다.');
        setIsLoading(false); // 로딩 종료
      }
    } catch (error) {
      console.error(error); // 에러 처리
      setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  const handleNextScreen = async () => {
    setIsLoading(true); // 로딩 시작
    const result = await regiBasicDataSave(std_id, STD_NUM, STD_DEC_CD, NAME);
    if (result !== null && result.RSLT_CD === '00') {
      setIsLoading(false); // 로딩 종료
      navigation.navigate('RegiPass', {
        STD_NUM: STD_NUM,
      });
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
        onPress={handleNextScreen}
        isLoading={isLoading} // 로딩 상태 전달
        errorMessage={errorMessage} // 에러 메시지 전달
      />
    </AllBackground>
  );
};

export default RegiID;
