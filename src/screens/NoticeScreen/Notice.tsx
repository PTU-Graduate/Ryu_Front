import React, {useState} from 'react';
import {AllBackground} from '../../components/AllSrcComponets/AllBackground';
import {Image, ScrollView, View} from 'react-native';
import {ScreenProps} from '../../navigations/StackNavigator';
import {NoticeCategoryCompo} from '../../components/NoticeSrcComponets/NoticeCategoryCompo';
import {NoticeListButton} from '../../components/NoticeSrcComponets/NoticePostCompo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deviceHeight, deviceWidth} from '../../utils/DeviceUtils';
import {AllTitleTopBarCompo} from '../../components/MainSrcCompo/TopBarCompo';

const Notice: React.FC<ScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('공지');
  return (
    <AllBackground>
      <View style={{flex: 1}}>
        {selectedCategory === '공지' && (
          <AllTitleTopBarCompo
            text="공 지 사 항"
            onPress={() => navigation.goBack()}
          />
        )}
        {selectedCategory === '학사' && (
          <AllTitleTopBarCompo
            text="학 사 안 내"
            onPress={() => navigation.goBack()}
          />
        )}
        {selectedCategory === '장학' && (
          <AllTitleTopBarCompo
            text="장 학 안 내"
            onPress={() => navigation.goBack()}
          />
        )}
        {selectedCategory === '입학' && (
          <AllTitleTopBarCompo
            text="입 학 안 내"
            onPress={() => navigation.goBack()}
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <NoticeCategoryCompo
          selectedCategory={selectedCategory} // 상태 공유
          setSelectedCategory={setSelectedCategory} // 상태 공유
        />
      </View>
      {selectedCategory === '공지' && (
        <View style={{flex: 9, alignItems: 'center'}}>
          <ScrollView>
            <NoticeListButton
              title="모바일 학사정보시스템 [헤이영 캠퍼스] 오픈 안내"
              date="2024.03.07"
              onPress={() => navigation.navigate('NoticeDetail')}
            />
            <NoticeListButton
              title="e-학사정보시스템 로그인 시 2차인증 적용 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024년 평택대학교 대학안전관리 계획 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024년 천원의 아침밥 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="제237회 학교법인 피어선기념학원 이사회 개최"
              date="2024.04.07"
            />
            <NoticeListButton
              title="교내 장애인전용주차구역 주차방해금지 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024학년도 2학기 창업 동아리 모집"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024학년도 2학기 연구 활동 종사자 온라인 정기 교육 공지 사항"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024학년도 2학기 학생생활상담센터 개인상담 및 심리검사 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024학년도 동계 계절학기 교류대학 → 본교 학점교류 안내"
              date="2024.04.07"
            />
            <NoticeListButton
              title="2024학년도 동계 계절학기 안내[수강신청"
              date="2024.04.07"
            />
          </ScrollView>
        </View>
      )}
      {selectedCategory === '학사' && (
        <View style={{flex: 9, alignItems: 'center'}}>
          <ScrollView>
            <NoticeListButton title="2024학년" date="2024.04.07" />
          </ScrollView>
        </View>
      )}
      {selectedCategory === '장학' && (
        <View style={{flex: 9, alignItems: 'center'}}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/money.png')}
                style={{
                  width: deviceWidth,
                  height: deviceHeight * 0.13,
                  opacity: 0.3,
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{marginTop: deviceHeight * 0.025}}>
              <NoticeListButton
                title="2024년 2학기 연구 활동 종사자 온라인 정기 교육 공지 사항"
                date="2024.04.07"
              />
            </View>
          </ScrollView>
        </View>
      )}
      {selectedCategory === '입학' && (
        <View style={{flex: 9, alignItems: 'center'}}>
          <ScrollView>
            <NoticeListButton
              title="2025학년도 편입학모집 안내"
              date="2024.04.07"
            />
          </ScrollView>
        </View>
      )}
    </AllBackground>
  );
};

export default Notice;
