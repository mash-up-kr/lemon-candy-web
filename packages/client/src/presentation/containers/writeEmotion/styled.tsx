import styled from 'styled-components';

export const StyledSwipeWrapper = styled.div`
  height: 300px;
`;

export const StyledContentWrapper = styled.div`
  padding: 44px;
`;

/**
* color theme 가지고 오기
*/
export const StyledDatePickerWrapper = styled.div`
  .content {
    padding-bottom: 3px;
    border-bottom: 1px solid #fff;
    display: inline-block;

    .date {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      position: relative; 
    }

    .date_picker {
      .SingleDatePickerInput__withBorder {
        border: none ;
      }
      .DateInput_input {
        background-color: black !important;
        padding: 0;
        font-size: 24px !important;
        font-weight: bold !important;
        color: white !important;
        border: none !important;
      }
      .DateInput_input__focused {
        border-bottom: 2px solid black;
      }
    }
  }
`;

export const StyledTextAreaWrapper = styled.div`
  padding-top: 20px;
  textarea {
    width: 100%;
    background: none;
    border: none;
    resize: none;
    color: #c7c7c7;
    outline: 0px;
    overflow-y: hidden;
  }
`;