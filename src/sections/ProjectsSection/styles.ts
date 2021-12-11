import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light02};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

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
  margin-bottom: -0px;
  padding: 5rem 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  };

  @media screen and (max-width: 580px) {
    grid-template-columns: 100%;
  };
`;

export const BackgroundLeftContent = styled.div`
  height: 210px;
  width: 210px;
  background-color: ${colors.primary.main};
  position: absolute;
  z-index: 10;
  left: -10px;
  top: -10px;
  margin: 5rem 5%;
  border-top-left-radius: 4px;
`;

export const BackgroundRightContent = styled.div`
  height: 210px;
  width: 210px;
  background-color: ${colors.primary.main};
  position: absolute;
  z-index: 10;
  right: -10px;
  bottom: -10px;
  margin: 5rem 5%;
  border-bottom-right-radius: 4px;

  @media screen and (max-width: 768px) {
    left: -10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 0;
  };

  @media screen and (max-width: 580px) {
    right: -10px !important;
    bottom: -14px;
    left: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  };
`;

export const DivideLine = styled.div`
  width: 8px;
  height: 80px;
  background: ${colors.primary.main};
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const PortfolioCard = styled.div`
  background: ${colors.gray.light01};
  padding: 1rem 1.5rem;
  border-radius: 4px;
  position: relative;
  z-index: 50;
`;

export const PortfolioBackgroundImg = styled.img`
  height: 200px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 4px;
`;
