import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 200px;
    height: 200px;
  }
  img.books {
    margin-top: 80px;
    opacity: 90%;
  }
`;
export const ContainerTitle = styled.div`
  margin-top: 130px;
  height: 130px;
  text-align: center;
  h1 {
    width: 470px;
    align-items: center;
    color: #3d3d4d;
  }
  text {
    color: #a1a1a1;
  }
`;
export const Form = styled.form`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  margin-bottom: 50px;
  input {
    height: 70px;
    width: 900px;
    padding: 0 24px;
    border-radius: 10px;
    border: 0;
    color: #3a3a3a;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: #a8a8b3;
  }
  button {
    margin-top: 5px;
    position: absolute;
    margin-left: 370px;
    width: 140px;
    height: 60px;
    background: #6868ff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6868ff')};
    }
  }
`;
export const BookContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  overflow: scroll;
  transition: width 2s;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    margin: 10px;
    flex-direction: column;
    width: 220px;
    text-align: center;
    width: 200px;

    img {
      border-radius: 10px;
      margin-right: 10px;
      margin-left: 5px;
      width: 150px;
    }
  }
`;
export const BookContainerExtra = styled.div`
  display: flex;
  align-items: center;
  button {
    border: 0;
  }
`;
