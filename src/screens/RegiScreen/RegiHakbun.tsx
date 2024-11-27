import React, {useState} from 'react';
import {RegiCkeckCommonScreen} from '../../components/RegiCommonScreen/RegiCheckCommonScreen';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {RegiHakbunProps} from '../../utils/navigationProps/RegiNavigationProps';
import {regiHakbunApiCall} from '../../services/_private/Regi/RegiApi';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Platform} from 'react-native';

const RegiHakbun: React.FC<RegiHakbunProps> = ({navigation, route}) => {
  const [std_num, setStd_num] = useState<string>(''); // 사용자가 입력한 값
  const [butOnOff, setButOnOff] = useState<boolean>(true); // 버튼 활성화 여부
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 상태 관리
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지 상태

  const {STD_DEC_CD} = route.params;

  const handleRegi = async () => {
    setIsLoading(true); // 로딩 시작
    setErrorMessage(null); // 기존 에러 메시지 초기화
    try {
      console.log(std_num);
      const result = await regiHakbunApiCall(std_num);
      if (result !== null && result.RSLT_CD === '00') {
        setButOnOff(false);
      } else {
        // RSLT_CD가 00이 아닐 경우 에러 메시지 설정
        setErrorMessage(result?.ERR_MSG || '이미 등록되어 있는 학번 입니다.');
        setIsLoading(false); // 로딩 종료
      }
    } catch (error) {
      console.error(error); // 에러 처리
      setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <AllBackground>
      <RegiCkeckCommonScreen
        value={std_num}
        onChangeText={text => setStd_num(text)}
        mediumtext="학번"
        smalltext="을 입력해주세요."
        placeholder="학번"
        CheckonPress={handleRegi}
        onPress={() =>
          navigation.navigate('RegiName', {
            STD_DEC_CD: STD_DEC_CD,
            STD_NUM: std_num,
          })
        }
        disable={butOnOff}
        isLoading={isLoading} // 로딩 상태 전달
        errorMessage={errorMessage} // 에러 메시지 전달
      />
    </AllBackground>
  );
};

export default RegiHakbun;
