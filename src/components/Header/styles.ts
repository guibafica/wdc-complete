import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${colors.gray.white};
  box-shadow: 0 0.5rem 1.5rem #00000010;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 5%;

  @media screen and (max-width: 991px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.a`
  font-size: 2rem;
  color: ${colors.gray.dark01};
  font-weight: bold;
  display: flex;
  flex-direction: row;

  > p {
    color: ${colors.primary.main};
  }
`;

export const Navbar = styled.nav<{ opened: boolean; }>`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 115%;
    right: 2rem;
    background: ${colors.gray.white};
    box-shadow: 0 0.5rem 1.5rem #00000010;
    border: 0.1rem solid #00000010;
    border-radius: 0.5rem;
    width: 20rem;
    transition: 0.3s all ease-in-out;

    transform: ${({ opened }) => (opened ? 'scale(1)' : 'scale(0)')};
    transform-origin: top right;
    opacity: ${({ opened }) => (opened ? '1' : '0')};
  }
`;

export const Options = styled.a`
  font-size: 1rem;
  color: ${colors.gray.light01};
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  
  &+a {
    margin-left: 1rem;
  }

  &:hover {
    color: ${colors.primary.main};
    border-bottom: 1px solid ${colors.primary.main};
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    display: block;
    padding: 1rem;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {
      background: ${colors.primary.main};
      color: ${colors.gray.white};
    }
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 17% 83% 70% 30% / 55% 42% 58% 45%;
  color: ${colors.primary.main};
  background: ${colors.secondary.background};
  transition: 0.3s all ease-in-out;
  display: none;

  &:hover {
    color: ${colors.gray.white};
    background: ${colors.primary.main};
  }

  @media screen and (max-width: 768px) {
   display: initial;
  }
`;
