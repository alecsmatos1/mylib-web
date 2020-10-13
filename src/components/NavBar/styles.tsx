import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -30px;
  img {
    margin-top: -10px;
    width: 90px;
    height: 90px;
    margin-left: 20px;
    margin-bottom: -10px;
  }
`;

export const HeaderTextContainer = styled.div`
  margin-top: 20px;
  text {
    font: Roboto, sans-serif;
    font-size: 20px;
    margin-right: 35px;
    color: #3d3d4d;
  }
`;
