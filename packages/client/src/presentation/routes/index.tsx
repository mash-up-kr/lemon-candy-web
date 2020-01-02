import React from 'react';

import MainView from '@/presentation/views/main';
import PageContentWrapper from '@/presentation/components/pageContentWrapper';
import MonthList from '@/presentation/containers/monthList';
import WriteEmotion from '@/presentation/containers/writeEmotion';

const EntryRoute: React.FC = () => (
  <div className="App">
    {/* <MainView /> */}
    <PageContentWrapper>
      <WriteEmotion />
    </PageContentWrapper>
  </div>
);

export default EntryRoute;
