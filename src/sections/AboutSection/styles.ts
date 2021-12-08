import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light02};
  width: 100%;
  height: 100vh;
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
  margin-right: 10px;
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

export const AboutImageDiv = styled.div`
  height: 100%;
  width: 49%;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 4rem;
  };
`;

export const AboutImage = styled.img`
  width: 100%;
`;

export const TextDiv = styled.div`
  height: 100%;
  width: 49%;

  @media screen and (max-width: 960px) {
    width: 100%;
  };
`;

export const CardsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  @media screen and (max-width: 960px) {
    margin-top: 32px;
  };

  @media screen and (max-width: 500px) {
    flex-direction: column;
  };
`;

export const InfoCard = styled.div`
  width: 32%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.gray.light01};
  border-radius: 8px;
  background-color: ${colors.gray.white};
  
  @media screen and (max-width: 500px) {
    width: 100%;

    &+div {
      margin-top: 10px;
    }
  };
`;

export const IconDiv = styled.div`
  padding: 8px;
  border-radius: 500px;
  background-color: ${colors.secondary.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;
