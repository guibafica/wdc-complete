import styled from 'styled-components';

import homeWave from '../../assets/wavetwo.png';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light02};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InformationDiv = styled.div`
  width: 100%;
  height: 50vh;
  background: ${colors.primary.main};
`;

export const Wave = styled.div`
  width: 100%;
  height: 90vh;

  margin-top: 200px;
  background-image: url(${homeWave});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  padding: 0 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  };
`;

export const ColumDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 26%;
  width: 40%;

  @media screen and (max-width: 768px) {
      width: 100%;
      height: 30%;
  };
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const ColumRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 15%;
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    height: 50%;
  };
`;

export const ImageDiv = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  position: absolute;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  transition: 0.3s all ease-in-out;
  position: absolute;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageDetailOne = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  z-index: 1;
  position: absolute;
  margin-top: 20px;
  background: ${colors.gray.dark01};
`;

export const ImageDetailTwo = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  z-index: 1;
  background: ${colors.gray.light01};
  position: absolute;
  margin-top: 10px;
`;
