import React from 'react';

import Header from '@/presentation/components/header';
import FloatingButton from '@/presentation/components/floatingButton';

const EntryRoute: React.FC = () => (
  <div className="App">
    <Header
      title="2019"
      leftSide="설정"
      rightSide="리마인드"
    />
    <FloatingButton onClick={ say('클릭') } />
  </div>
);

export default EntryRoute;
