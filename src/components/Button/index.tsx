import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import colors from '../../utils/colors';

import * as Styles from './styles';

interface IButtonNeonProps {
  text: string;
  to?: string;
  fontSize?: number;
}

const Button: any = styled(Link) <{ fontSize: string }>`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: ${colors.gray.white};
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: ${({ fontSize = 16 }: any) => fontSize / 10}rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    color: ${colors.primary.main};
    font-weight: 700;
  }
`;

const ButtonNeon: React.FC<IButtonNeonProps> = ({ text, to, fontSize }) => {
  return (
    <>
      <Styles.Container>
        <Button to={to} fontSize={fontSize}>
          {text}
        </Button>
      </Styles.Container>
    </>
  );
};

export default ButtonNeon;
