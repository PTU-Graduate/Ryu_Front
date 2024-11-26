import React, {useState, useEffect} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScreenProps} from '../../navigations/StackNavigator';
import {NoticeCategoryCompo} from '../../components/NoticeSrcComponets/NoticeCategoryCompo';
import NoticeListButton from '../../components/NoticeSrcComponets/NoticePostCompo';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {
  AllTitleTopBarCompo,
  AllNoticeTitleTopBarCompo,
} from '../../components/MainSrcCompo/TopBarCompo';
import {noticeDataApi} from '../../services/_private/communitySer/NoticeService';
import {getNoticeData} from '../../utils/DataTableSet/communityUtil/NoticeUtil';
import {NoticeItemType} from '../../utils/DataTableSet/communityUtil/NoticeUtil';
import {bachelorDataApi} from '../../services/_private/communitySer/BachelorService';
import {entranceDataApi} from '../../services/_private/communitySer/EntranceService';
import {scholarDataApi} from '../../services/_private/communitySer/ScholarService';
import {
  BachelorItemType,
  getBachelorData,
} from '../../utils/DataTableSet/communityUtil/BachelorUtil';
import {
  EntranceItemType,
  getEntranceData,
} from '../../utils/DataTableSet/communityUtil/EntranceUtil';
import {
  ScholarItemType,
  getScholarData,
} from '../../utils/DataTableSet/communityUtil/ScholarUtil';

const Notice: React.FC<ScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('공지');
  const [page, setPage] = useState<number>(0); // 페이지 상태
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [hasMore, setHasMore] = useState<boolean>(true); // 추가 데이터 여부
  const [refreshing, setRefreshing] = useState<boolean>(false); // 새로고침 상태

  // 각 카테고리 데이터를 위한 상태
  const [noticeData, setNoticeData] = useState<NoticeItemType[]>([]);
  const [bachelorData, setBachelorData] = useState<BachelorItemType[]>([]);
  const [scholarData, setScholarData] = useState<ScholarItemType[]>([]);
  const [entranceData, setEntranceData] = useState<EntranceItemType[]>([]);

  const [dataFetched, setDataFetched] = useState<{
    [key: string]: boolean;
  }>({
    공지: false,
    학사: false,
    장학: false,
    입학: false,
  });

  // 데이터 요청 함수
  const fetchDataByCategory = async (page: number, reset: boolean = false) => {
    if (loading) return; // 로딩 중이면 더 이상 요청하지 않음
    setLoading(true);
    if (reset) {
      setPage(0); // 새로고침 시 페이지를 0으로 설정
    }
    try {
      let newData: any[] = [];
      console.log('호출 페이지', page);
      // 카테고리별 데이터 요청
      switch (selectedCategory) {
        case '공지':
          await noticeDataApi(page).then(() => {
            const result = getNoticeData();
            newData = result?.NOTICES?.flat() || [];
            setNoticeData(prevData => [
              ...(reset ? [] : prevData), // 새로고침 시 기존 데이터 제거
              ...newData,
            ]);
            setHasMore(newData.length > 0); // 추가 데이터가 있으면 true
          });
          break;
        case '학사':
          await bachelorDataApi(page).then(() => {
            const result = getBachelorData();
            newData = result?.BACHELOR?.flat() || [];
            setBachelorData(prevData => [
              ...(reset ? [] : prevData),
              ...newData,
            ]);
            setHasMore(newData.length > 0); // 추가 데이터가 있으면 true
          });
          break;
        case '장학':
          await scholarDataApi(page).then(() => {
            const result = getScholarData();
            newData = result?.SCHOLAR?.flat() || [];
            setScholarData(prevData => [
              ...(reset ? [] : prevData),
              ...newData,
            ]);
            setHasMore(newData.length > 0); // 추가 데이터가 있으면 true
          });
          break;
        case '입학':
          await entranceDataApi(page).then(() => {
            const result = getEntranceData();
            newData = result?.ENTRANCE?.flat() || [];
            setEntranceData(prevData => [
              ...(reset ? [] : prevData),
              ...newData,
            ]);
            setHasMore(newData.length > 0); // 추가 데이터가 있으면 true
          });
          break;
      }
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
      setRefreshing(false); // 새로고침 상태 종료
      setDataFetched(prev => ({
        ...prev,
        [selectedCategory]: true, // 데이터 요청이 완료된 카테고리로 업데이트
      }));
    }
  };

  // 처음 로딩 시 데이터 가져오기
  useEffect(() => {
    // 이미 데이터가 로딩된 카테고리라면 요청을 하지 않음
    if (!dataFetched[selectedCategory]) {
      fetchDataByCategory(0); // 카테고리 변경 시마다 데이터 새로 요청
    }
  }, [selectedCategory]);

  // FlatList에서 스크롤할 때 호출되는 함수
  const onEndReached = (info: {distanceFromEnd: number}) => {
    // 스크롤이 맨 아래에 가까우면 다음 페이지 호출
    if (info.distanceFromEnd < 0) return; // 스크롤이 끝에 가까울 때만 처리
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1); // 페이지 증가
      fetchDataByCategory(page + 1); // 페이지가 증가하면 해당 페이지 데이터 요청
    }
  };

  // 새로고침 시 데이터 요청
  const onRefresh = () => {
    setRefreshing(true);
    fetchDataByCategory(0, true); // 0페이지부터 새로고침
  };

  // 현재 선택된 카테고리에 따라 데이터를 렌더링
  const renderCategoryData = () => {
    let data: any[] = [];

    switch (selectedCategory) {
      case '공지':
        data = noticeData;
        break;
      case '학사':
        data = bachelorData;
        break;
      case '장학':
        data = scholarData;
        break;
      case '입학':
        data = entranceData;
        break;
      default:
        break;
    }

    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.CRE_SEQ}-${index}`}
        renderItem={({item}) => (
          <View
            style={{
              width: deviceWidth * 1,
              alignItems: 'center',
            }}>
            <NoticeListButton
              title={item.TIT}
              date={new Date(item.CRE_DATE).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
              onPress={() =>
                navigation.navigate('NoticeDetail', {
                  MEMB_ID: item.MEMB_ID,
                  CRE_SEQ: item.CRE_SEQ,
                  IMG_CD: item.IMG_CD,
                  TIT: item.TIT,
                  CONT: item.CONT,
                  CRE_DATE: item.CRE_DATE,
                  category: selectedCategory,
                })
              }
            />
          </View>
        )}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" color="#000" /> : null
        }
        onEndReached={hasMore && !loading ? onEndReached : undefined} // 로딩 중일 때는 호출되지 않도록
        onEndReachedThreshold={0.8} // 스크롤이 얼마나 내려갔을 때 호출될지 설정
        refreshing={refreshing} // 새로고침 상태 관리
        onRefresh={onRefresh} // 새로고침 이벤트 처리
      />
    );
  };

  return (
    <AllBackground>
      <View style={{flex: 1}}>
        <AllNoticeTitleTopBarCompo
          text={selectedCategory}
          onPress={() => navigation.goBack()}
          onPressplus={() => navigation.navigate('NoticeUpload')}
        />
      </View>
      <View style={{flex: 1}}>
        <NoticeCategoryCompo
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>

      {/* Display image only for "장학" category */}
      {selectedCategory === '장학' && (
        <View style={{flex: 9, alignItems: 'center', width: '100%'}}>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('NoticeMoney')}>
              <Image
                source={require('../../assets/images/money.png')} // Replace with the actual image URL
                style={{
                  width: deviceWidth,
                  height: deviceHeight * 0.13,
                  opacity: 0.3,
                }}
              />
            </TouchableOpacity>
          </View>
          {renderCategoryData()}
        </View>
      )}

      {selectedCategory === '공지' && (
        <View style={{flex: 9, alignItems: 'center', width: '100%'}}>
          {renderCategoryData()}
        </View>
      )}

      {selectedCategory === '학사' && (
        <View style={{flex: 9, alignItems: 'center', width: '100%'}}>
          {renderCategoryData()}
        </View>
      )}

      {selectedCategory === '입학' && (
        <View style={{flex: 9, alignItems: 'center', width: '100%'}}>
          {renderCategoryData()}
        </View>
      )}
    </AllBackground>
  );
};

export default Notice;
