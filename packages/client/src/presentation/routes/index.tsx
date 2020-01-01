import React from 'react';

import MainView from '@/presentation/views/main';
import PageContentWrapper from '@/presentation/components/pageContentWrapper';
import MonthList from '@/presentation/containers/monthList';

const EntryRoute: React.FC = () => (
  <div className="App">
    {/* <MainView /> */}
    <PageContentWrapper>
      <MonthList />
    </PageContentWrapper>
  </div>
);

export default EntryRoute;
