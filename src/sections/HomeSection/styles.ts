import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.secondary.background};
  width: 100%;
  height: 100vh;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageDiv = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.gray.light01};
  margin-top: 20px;
  border: 2px solid ${colors.gray.dark01};
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 990px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  };
`;
