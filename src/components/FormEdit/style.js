import styled, { css } from "styled-components";


export const Container = styled.div`
  align-self: flex-start;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  .transitionButton {
    background: transparent;    
    border: none;  
   
  }
`;
export const Modals = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: none;
  z-index: 9999;

  background: #20202095;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  opacity: 0;
  height: 0;
  fieldset {
    background: #dfdfdf;
    border-radius: 10px;
    position: relative;
    border: none;
    
    #close {
      position: absolute;
      right: 10px;
      top: 0;
      width:25px;
      &:hover{
        transform: scale(1.07);
      }
    }
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    padding: 20px 60px;
    .labelText {
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: #101010;
    }
    .inputText {
      background: transparent;
      border: 1px solid #7ed957;
      border-radius: 10px;
      padding: 10px;
      color: #101010;
      font-weight: 500;
      font-size: 15px;
      line-height: 33px;
      ::placeholder {
        color: #10101085;
      }
    }
    button {
      margin-top: 10px;
      background: #7ed957;
      padding: 5px 10px;
      color: #101010;
      border-radius: 10px;
      border: none;
      font-weight: 600;
      font-size: 13px;
      line-height: 33px;
      &:hover{
        background: #7ed95780; 
        transform: scale(1.02);       
      }
      &:active{
        background: #7ed95740;
        color: #fff;
      }
    }
    #checkbox {
      display: flex;
      column-gap: 45px;
      align-items: center;
      label {
        display: flex;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #101010;
        align-items: center;
        column-gap: 5px;
        input {
          opacity: 0;
          position: absolute;
        }
        #check {
          width: 20px;
          height: 20px;
          background-color: transparent;
          border: 1px solid #a9afb9;
          border-radius: 4px;
          svg {
            display: none;
            width: 20px;
            height: auto;
            color: #101010;
          }
        }
        input:checked ~ #check {
          svg {
            display: block;
          }
          background: #7ed957;
        }
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 100%;
      overflow: visible;
      opacity: 1;
      transition: opacity ease-in 0.5s;
    `}
`;
