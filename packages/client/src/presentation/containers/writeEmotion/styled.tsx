import styled from 'styled-components';

export const StyledSwipeWrapper = styled.div`
  /* height: 300px; */
  .swiper-container {
  }
`;

export const StyledContentWrapper = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;

/**
* color theme 가지고 오기
*/
export const StyledDatePickerWrapper = styled.div`
  .content {
    padding-bottom: 3px;
    border-bottom: 1px solid #fff;
    display: inline-block;

    .date_picker {
      position: relative;
      .date {
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        position: relative; 
      }
      input[type="date"] {
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const StyledTextAreaWrapper = styled.div`
  padding: 24px;
  width: 100%;
  textarea {
    width: 100%;
    background: none;
    border: none;
    resize: none;
    color: #c7c7c7;
    outline: 0px;
    overflow-y: hidden;
    border-radius: 8px;
    background-color: #131415;
    padding: 20px;
    min-height: 260px;
  }
`;

export const Scenewrapper = styled.div`
  padding-top: 53px;
`;
