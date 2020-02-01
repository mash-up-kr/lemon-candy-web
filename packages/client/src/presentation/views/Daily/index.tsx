import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DailyArticleActionTypes } from '@/store/dailyArticle/types';
import Header from '@/presentation/components/header';
import dayjs from 'dayjs';
import DailyArticle, { Modal } from '@/presentation/containers/dailyArticle';
import history from 'history';
import { useHistory, useParams } from 'react-router-dom';
import back from '@lemon/icons/svgs/btn-main-back.svg';

function useApiCall () {
  const dispatch = useDispatch();
  const { year, month, day } = useParams();
  useEffect(() => {
    dispatch({ type: DailyArticleActionTypes.REQUEST_DAILY_ARTICLE, payload: { year, month, day}});
  }, [])
  return {
    year, month, day
  }
}

const MoreModal = (props:any) => {
  const { isOpen, setOpen } = props;
  const history = useHistory();
  const { year, month, day } = useParams();
  return (
    <Modal.wrapper isOpen={isOpen}>
        <Modal.content>
          <Modal.optionWrapper>
            <div onClick={() => history.push(`/edit/${year}/${month}/${day}`)}>수정</div>
            <div>삭제</div>
          </Modal.optionWrapper>
          <Modal.cancelBtn onClick={() => {setOpen(false)}}>취소</Modal.cancelBtn>
        </Modal.content>
      </Modal.wrapper>
  )
}

const Daily = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const { month, day } = useApiCall();
  const history = useHistory();
  return (
    <div>
      <Header 
        title={`${month}월 ${day}일`} 
        leftSide={<img src={back} onClick={() => history.goBack()}/>}
        rightSide={<div onClick={() => setOpen(true)}>더보기</div>} />
      <DailyArticle />
      <MoreModal isOpen={isOpen} setOpen={setOpen}/>
    </div>
  );
}

export default Daily;