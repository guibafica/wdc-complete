import React from 'react';

import profilePic from '../../assets/profilePic.jpg';

import Text from '../../components/Text';
import Button from '../../components/Button';

import colors from '../../utils/colors';

import * as Styles from './styles';

const HomeSection: React.FC = () => {
  return (
    <Styles.Container id="home">
      <Styles.InformationDiv>
        <Styles.Wave>
          <Styles.Content>
            <Styles.ColumDiv>
              <Text
                text="Olá, eu sou Jhon Doe,"
                align="left"
                color={colors.gray.light02}
                size={14}
                weight="700"
                fontFamily="Dosis"
              />

              <Text
                text="Desenvolvedor Web"
                align="left"
                color={colors.gray.light02}
                size={12}
                marginTop={8}
                weight="500"
                fontFamily="Dosis"
              />

              <Text
                text="Labore id occaecat sunt proident exercitation consequat."
                align="center"
                color={colors.gray.light02}
                size={10}
                marginTop={4}
                marginBottom={24}
                weight="500"
                fontFamily="Dosis"
              />

              <Styles.ButtonDiv>
                <Button text="Baixar CV" fontSize={8} />
              </Styles.ButtonDiv>
            </Styles.ColumDiv>

            <Styles.ColumRightDiv>
              <Styles.ImageDetailOne />
              <Styles.ImageDetailTwo />

              <Styles.ImageDiv>
                <Styles.ProfileImage src={profilePic} />
              </Styles.ImageDiv>
            </Styles.ColumRightDiv>
          </Styles.Content>
        </Styles.Wave>
      </Styles.InformationDiv>
    </Styles.Container>
  )
}

export default HomeSection;
