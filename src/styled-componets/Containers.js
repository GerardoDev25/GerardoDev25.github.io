import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  height: 100%;
  min-height: 600px;
  max-width: 1100px;
  background-color: green;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 390px) {
    margin: 0;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 89%;
  outline: 2px dotted black;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 9%;
  outline: 2px dotted black;
`;
