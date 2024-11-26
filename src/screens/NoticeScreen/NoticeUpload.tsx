import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker'; // react-native-image-picker에서 이미지 선택을 위한 함수
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {AllAddTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';
import {ScreenProps} from '../../navigations/StackNavigator';
import {noticeAdd} from '../../services/_private/communitySer/NoticeService';
import {getUserData} from '../../utils/DataTableSet/LoginResultData';
import AllTextStyles from '../../styles/AllSrcStyles/AllTextStyles';

const NoticeUpload: React.FC<ScreenProps> = ({navigation}) => {
  const [tit, setTit] = useState<string>('');
  const [cont, setCont] = useState<string>('');
  const [membid, setMembId] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string>(''); // 선택된 이미지의 base64 상태

  // 이미지 선택 핸들러
  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // 사진만 선택할 수 있도록 설정
        includeBase64: true, // Base64 형식으로 이미지 반환
        quality: 0.1, // 이미지 품질 설정 (선택사항)
      },
      response => {
        if (response.assets) {
          const image = response.assets[0];
          if (image.base64) {
            setImageBase64(image.base64); // 선택된 이미지를 base64로 상태에 저장
          }
        }
      },
    );
  };

  useEffect(() => {
    const userData = getUserData();
    if (userData !== null && userData.MEMB_ID !== null) {
      setMembId(userData?.MEMB_ID);
    }
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  useEffect(() => {
    console.log(membid); // membid 상태가 변경될 때마다 실행
  }, [membid]);

  const handleAdd = async () => {
    try {
      const result = await noticeAdd(membid, tit, cont, imageBase64);
      if (result !== null && result.RSLT_CD === '00') {
        navigation.goBack();
      } else {
        // 실패한 경우 처리
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllAddTitleTopBarCompo
          text="공지사항 등록"
          onPress={() => navigation.goBack()}
          onPressplus={handleAdd}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: deviceHeight * 0.015}}>
          <View
            style={{
              flexDirection: 'row',
              width: deviceWidth * 0.9,
            }}>
            <Text style={AllTextStyles.SemiBold15}>제목 : </Text>
            <TextInput
              style={{
                width: deviceWidth * 0.79,
                height: deviceHeight * 0.03,
                borderBottomColor: '#999999',
                borderBottomWidth: 0.3,
              }}
              value={tit}
              onChangeText={text => setTit(text)}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 9, marginLeft: deviceWidth * 0.05}}>
        <Text style={AllTextStyles.SemiBold15}>본문</Text>
        <TextInput
          style={{
            width: deviceWidth * 0.9,
            height: deviceHeight * 0.6,
            marginTop: deviceHeight * 0.01,
            borderColor: '#999999',
            borderWidth: 0.3,
          }}
          multiline={true}
          value={cont}
          onChangeText={setCont}
        />

        {/* 이미지 선택 버튼 */}
        <TouchableOpacity
          style={{
            width: deviceWidth * 0.25,
            height: deviceWidth * 0.1, // 버튼 크기
            backgroundColor: '#A7D18C',
            justifyContent: 'center',
            borderRadius: 15,
            marginTop: deviceHeight * 0.02,
            marginLeft: deviceWidth * 0.65,
            alignItems: 'center', // 이미지가 버튼 안에 중앙에 오도록 설정
            overflow: 'hidden', // 이미지가 버튼 안에서 벗어나지 않도록
          }}
          onPress={handleImagePick} // 버튼 클릭 시 이미지 선택
        >
          {/* 선택된 이미지가 있을 경우 그 이미지를 버튼 안에 표시 */}
          {imageBase64 ? (
            <Image
              source={{uri: `data:image/jpeg;base64,${imageBase64}`}} // base64로 인코딩된 이미지
              style={{
                width: '100%', // 버튼의 크기에 맞게 이미지 크기 조정
                height: '100%',
                resizeMode: 'cover', // 이미지 크기를 맞추기 위한 방식
              }}
            />
          ) : (
            <Text style={AllTextStyles.medium13}>이미지 선택</Text> // 이미지가 없으면 "이미지 선택" 텍스트 표시
          )}
        </TouchableOpacity>
      </View>
    </AllBackground>
  );
};

export default NoticeUpload;