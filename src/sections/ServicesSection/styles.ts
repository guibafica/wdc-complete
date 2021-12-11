import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light02};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;

  @media screen and (max-width: 960px) {
    padding-top: 0;
  };
  
  @media screen and (max-width: 768px) {
    padding-top: 10rem;
  };
`;

export const TitleH1 = styled.h1`
  color: ${colors.gray.dark01};
  font-family: 'dosis';
`;

export const TitleSpan = styled.span`
  padding: 0.5rem 1rem;
  background-color: ${colors.secondary.background};
  margin-left: 10px;
  border-radius: 8px;
  color: ${colors.primary.main};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  };
`;

export const ServiceCard = styled.div`
  width: 30%;
  height: 50vh;
  border-radius: 12px;
  background: ${colors.secondary.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2%;

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 60vh;
    margin-bottom: 2rem;
    padding: 2rem 5%;
  };
`;

export const HeaderServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
