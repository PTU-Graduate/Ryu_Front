import React, {useEffect} from 'react';
import NavigationContainerWrapper from './src/navigations/NavigationContainer';
import {
  serverConnector,
  serverConnectorGet,
} from './src/services/_private/Api.config';

function App(): React.JSX.Element {
  useEffect(() => {
    const fetchData = async () => {
      const response = await serverConnectorGet('/test');
    };
    fetchData(); // 함수 호출
  }, []);
  // 위와 같이 빈 배열일 경우 이 스크린이 렌더링될 때 최초 한번만 useEffect를 실행한다는 의미
  // 빈 배열이 아닌 값이 들어가 있는 경우, 그 값이 변할 때마다 useeffect가 재실행
  return <NavigationContainerWrapper />;
}

export default App;
