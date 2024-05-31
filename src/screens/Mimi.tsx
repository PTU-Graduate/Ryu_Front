import React from 'react';
import {AllBackground} from '../components/AllSrcComponets/AllBackground';
import {ScreenProps} from '../navigations/StackNavigator';
import {AllTitleTopBarCompo} from '../components/MainSrcCompo/TopBarCompo';

const Mimi: React.FC<ScreenProps> = ({}) => {
  return (
    <AllBackground>
      <AllTitleTopBarCompo></AllTitleTopBarCompo>
    </AllBackground>
  );
};

export default Mimi;
