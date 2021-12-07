import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  display: inline-block;
  background-color: transparent;
  border: 0.15rem solid ${colors.gray.white};
  border-radius: 5% 4% 97% 5%/4% 94% 3% 95%;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.gray.white};
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    border: 0.2rem solid #fff;
    border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  }
`;
