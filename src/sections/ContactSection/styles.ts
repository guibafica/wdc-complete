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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  };
`;

export const ContactCard = styled.div`
  width: 32%;
  height: 230px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1.5rem #00000030;
  padding: 16px 0;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translate(0, -15px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    
    &+div {
      margin-top: 2rem;
    }

    &:hover {
      transform: translate(0, 0);
      transform: scale(1.06);
    }
  };
`;

export const ContactCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const IconDiv = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: ${colors.secondary.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactCardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
