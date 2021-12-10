import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Text from '../../components/Text';
import Button from '../../components/Button';

import colors from '../../utils/colors';

import * as Styles from './styles';

const ServicesSection: React.FC = () => {
  return (
    <Styles.Container id="about">
      <Styles.TitleH1>
        Nossos
        <Styles.TitleSpan>Serviços</Styles.TitleSpan>
      </Styles.TitleH1>

      <Styles.Content>
        <Styles.ServiceCard>
          <Styles.HeaderServiceCard>
            <AiOutlineMenu color={colors.primary.main} size={54} />

            <Text
              text="Web Development"
              align="center"
              color={colors.gray.dark01}
              size={14}
              weight="700"
              fontFamily="Dosis"
              marginTop={8}
            />

            <Text
              text="Non labore tempor nulla est elit elit reprehenderit nulla est ea consequat consectetur fugiat."
              align="center"
              color={colors.gray.light01}
              size={12}
              weight="400"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.HeaderServiceCard>

          <Button text="Saiba mais" fontSize={8} dark />
        </Styles.ServiceCard>

        <Styles.ServiceCard>
          <Styles.HeaderServiceCard>
            <AiOutlineMenu color={colors.primary.main} size={54} />

            <Text
              text="Web Development"
              align="center"
              color={colors.gray.dark01}
              size={14}
              weight="700"
              fontFamily="Dosis"
              marginTop={8}
            />

            <Text
              text="Non labore tempor nulla est elit elit reprehenderit nulla est ea consequat consectetur fugiat."
              align="center"
              color={colors.gray.light01}
              size={12}
              weight="400"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.HeaderServiceCard>

          <Button text="Saiba mais" fontSize={8} dark />
        </Styles.ServiceCard>

        <Styles.ServiceCard>
          <Styles.HeaderServiceCard>
            <AiOutlineMenu color={colors.primary.main} size={54} />

            <Text
              text="Web Development"
              align="center"
              color={colors.gray.dark01}
              size={14}
              weight="700"
              fontFamily="Dosis"
              marginTop={8}
            />

            <Text
              text="Non labore tempor nulla est elit elit reprehenderit nulla est ea consequat consectetur fugiat."
              align="center"
              color={colors.gray.light01}
              size={12}
              weight="400"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.HeaderServiceCard>

          <Button text="Saiba mais" fontSize={8} dark />
        </Styles.ServiceCard>
      </Styles.Content>
    </Styles.Container>
  )
}

export default ServicesSection;
