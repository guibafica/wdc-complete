import React from 'react';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import project1 from '../../assets/0.jpeg';
import project2 from '../../assets/1.jpeg';
import project3 from '../../assets/2.jpeg';

import * as Styles from './styles';

const ProjectsSection: React.FC = () => {
  return (
    <Styles.Container id="projects">
      <Styles.DivideLine />

      <Styles.TitleH1>
        Nossos
        <Styles.TitleSpan>Projetos</Styles.TitleSpan>
      </Styles.TitleH1>

      <Text
        text="Laborum ad non ad cupidatat eiusmod do qui in."
        align="center"
        color={colors.gray.light01}
        size={8}
        weight="400"
        fontFamily="Dosis"
        marginTop={8}
      />

      <Styles.Content>
        <Styles.BackgroundLeftContent />

        <Styles.PortfolioCard>
          <Text
            text="Visual Art"
            align="center"
            color={colors.gray.white}
            size={12}
            weight="700"
            fontFamily="Dosis"
          />

          <Text
            text="In voluptate magna ut magna nostrud."
            align="left"
            color={colors.gray.light02}
            size={10}
            weight="500"
            fontFamily="Dosis"
            marginTop={8}
          />

          <Styles.PortfolioBackgroundImg src={project1} />
        </Styles.PortfolioCard>

        <Styles.PortfolioCard>
          <Text
            text="Visual Art"
            align="center"
            color={colors.gray.white}
            size={12}
            weight="700"
            fontFamily="Dosis"
          />

          <Text
            text="In voluptate magna ut magna nostrud."
            align="left"
            color={colors.gray.light02}
            size={10}
            weight="500"
            fontFamily="Dosis"
            marginTop={8}
          />

          <Styles.PortfolioBackgroundImg src={project2} />
        </Styles.PortfolioCard>

        <Styles.PortfolioCard>
          <Text
            text="Visual Art"
            align="center"
            color={colors.gray.white}
            size={12}
            weight="700"
            fontFamily="Dosis"
          />

          <Text
            text="In voluptate magna ut magna nostrud."
            align="left"
            color={colors.gray.light02}
            size={10}
            weight="500"
            fontFamily="Dosis"
            marginTop={8}
          />

          <Styles.PortfolioBackgroundImg src={project3} />
        </Styles.PortfolioCard>

        <Styles.BackgroundRightContent />
      </Styles.Content>

      <Styles.DivideLine />
    </Styles.Container>
  )
}

export default ProjectsSection;
