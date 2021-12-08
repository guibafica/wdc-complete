import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiShare } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';

import Text from '../../components/Text';

import aboutIllustration from '../../assets/aboutIllustration.svg';

import colors from '../../utils/colors';

import * as Styles from './styles';

const AboutSection: React.FC = () => {
  return (
    <Styles.Container id="about">
      <Styles.TitleH1>
        <Styles.TitleSpan>Sobre</Styles.TitleSpan>
        nós
      </Styles.TitleH1>

      <Styles.Content>
        <Styles.AboutImageDiv>
          <Styles.AboutImage src={aboutIllustration} />
        </Styles.AboutImageDiv>

        <Styles.TextDiv>
          <Text
            text="Nisi cillum ipsum quis mollit exercitation commodo exercitatio."
            align="left"
            color={colors.gray.dark01}
            size={14}
            weight="700"
            fontFamily="Dosis"
          />

          <Text
            text="Incididunt irure nulla velit ea reprehenderit occaecat. Lorem eu consequat Lorem ut irure mollit ex eu. Sint adipisicing et ipsum reprehenderit tempor."
            align="left"
            color={colors.gray.dark01}
            size={12}
            marginTop={8}
            weight="500"
            fontFamily="Dosis"
          />

          <Styles.CardsDiv>
            <Styles.InfoCard>
              <Styles.IconDiv>
                <BsFillPersonFill color={colors.primary.main} size={24} />
              </Styles.IconDiv>

              <Text
                text="10 Lorem ipsum"
                align="center"
                color={colors.gray.dark01}
                size={10}
                marginTop={4}
                weight="700"
                fontFamily="Dosis"
              />
            </Styles.InfoCard>

            <Styles.InfoCard>
              <Styles.IconDiv>
                <IoMdSchool color={colors.primary.main} size={24} />
              </Styles.IconDiv>

              <Text
                text="5 Lorem ipsum"
                align="center"
                color={colors.gray.dark01}
                size={10}
                marginTop={4}
                weight="700"
                fontFamily="Dosis"
              />
            </Styles.InfoCard>

            <Styles.InfoCard>
              <Styles.IconDiv>
                <HiShare color={colors.primary.main} size={24} />
              </Styles.IconDiv>

              <Text
                text="11 Lorem ipsum"
                align="center"
                color={colors.gray.dark01}
                size={10}
                marginTop={4}
                weight="700"
                fontFamily="Dosis"
              />
            </Styles.InfoCard>
          </Styles.CardsDiv>
        </Styles.TextDiv>
      </Styles.Content>
    </Styles.Container>
  )
}

export default AboutSection;
