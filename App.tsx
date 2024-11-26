import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import NavigationContainerWrapper from './src/navigations/NavigationContainer';

function App(): React.JSX.Element {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // 초기 상태: 영상 재생 중

  const handleVideoEnd = () => {
    setIsVideoPlaying(false); // 영상 재생 완료 시 네비게이션 화면으로 전환
  };

  return (
    <>
      {isVideoPlaying ? (
        <View style={styles.videoContainer}>
          <Video
            source={require('./src/assets/video/loadingscreen.mp4')} // mp4 파일 경로
            style={styles.video}
            resizeMode="cover" // 비디오 크기 조절
            paused={false} // 비디오 자동 재생
            onEnd={handleVideoEnd} // 영상 재생 완료 이벤트
          />
        </View>
      ) : (
        <NavigationContainerWrapper />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // 배경 색상
  },
  video: {
    width: Dimensions.get('window').width, // 화면 가로 크기
    height: Dimensions.get('window').height, // 화면 세로 크기
  },
});

export default App;
