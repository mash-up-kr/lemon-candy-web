import React, { useEffect, useState } from 'react';

// import S from './styles';

interface REMIND {
  bestEmotion: number;
  command?: null | string;
  endDate: string;
  remindId: number;
  startDate: string;
  title?: null | string;
}

interface Props {
  reminds: REMIND[];
}

// @ts-ignore
const RemindListLayout: React.FC<Props> = ({
  reminds,
}) => {
  const [currentReminds, setCurrentReminds] = useState(reminds);
  useEffect(() => {
    const sortingReminds = reminds.sort((prev, val) => val.remindId - prev.remindId);
    setCurrentReminds(sortingReminds);
  }, [reminds]);

  const renderView = () => (
    currentReminds.map((it) => (
      <div>
        { it.remindId }
      </div>
    ))
  );

  return (
    renderView()
  );
};

export default RemindListLayout;
