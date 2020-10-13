import styled from 'styled-components';

export const AddBookContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAddBookContainer = styled.div`
  margin-left: 100px;
  width: 550px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: Roboto 'sans-serif';
    font-weight: 300;
    font-size: 48px;
  }

  button {
    width: 130px;
    height: 39px;
    background-color: #0a990f;
    border: none;
    padding: 8px;
    border-radius: 50px;
    font-weight: 400;
    font-family: Roboto 'sans-serif';
    font-size: 18px;
    color: white;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ContentRegisterBook = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BookPreviaImg = styled.img`
  width: 305px;
  height: 404px;
  border-radius: 10px;
`;

export const ContentForm = styled.div`
  margin-left: 60px;
  width: 765px;
  height: 500px;
`;

export const GroupInputOneColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  align-items: flex-start;
  justify-content: center;
  margin-right: 30px;
  span {
    margin-left: 10px;
    font-weight: 400;
    font-family: Roboto 'sans-serif';
    font-size: 24px;
    line-height: 135%;
  }
  input {
    padding-left: 26px;
    border-style: none;
    width: 100%;
    height: 48px;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: #a7a7a7;
  }

  .categoria-menu {
    color: black;
  }
`;

export const TwoColumnsInput = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const ThreeColumnsInput = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const ConfirmButtonRegister = styled.button`
  margin-top: 53px;
  width: 178px;
  height: 66px;
  margin-right: 30px;
  border-style: none;
  background-color: #6868ff;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.14);
  border-radius: 50px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 135%;
  /* identical to box height, or 38px */

  color: #ffffff;
`;
