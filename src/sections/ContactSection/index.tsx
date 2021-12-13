import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

const ContactSection: React.FC = () => {
  return (
    <Styles.Container id="projects">

      <Styles.TitleH1>
        Nosso
        <Styles.TitleSpan>Contato</Styles.TitleSpan>
      </Styles.TitleH1>


      <Styles.Content>
        <Styles.ContactCard>
          <Styles.ContactCardHeader>
            <Styles.IconDiv>
              <AiFillPhone color={colors.primary.main} size={32} />
            </Styles.IconDiv>

            <Text
              text="Nosso Número"
              align="center"
              color={colors.gray.dark01}
              size={12}
              weight="700"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.ContactCardHeader>

          <Styles.ContactCardFooter>
            <Text
              text="(99) 9 9999-9999"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
              marginBottom={4}
            />

            <Text
              text="(99) 9 9999-9999"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
            />
          </Styles.ContactCardFooter>
        </Styles.ContactCard>

        <Styles.ContactCard>
          <Styles.ContactCardHeader>
            <Styles.IconDiv>
              <BsFillEnvelopeFill color={colors.primary.main} size={32} />
            </Styles.IconDiv>

            <Text
              text="Nosso Email"
              align="center"
              color={colors.gray.dark01}
              size={12}
              weight="700"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.ContactCardHeader>

          <Styles.ContactCardFooter>
            <Text
              text="teste@email.com"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
              marginBottom={4}
            />

            <Text
              text="teste@email.com"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
            />
          </Styles.ContactCardFooter>
        </Styles.ContactCard>

        <Styles.ContactCard>
          <Styles.ContactCardHeader>
            <Styles.IconDiv>
              <FaMapMarkerAlt color={colors.primary.main} size={32} />
            </Styles.IconDiv>

            <Text
              text="Nossa Localização"
              align="center"
              color={colors.gray.dark01}
              size={12}
              weight="700"
              fontFamily="Dosis"
              marginTop={4}
            />
          </Styles.ContactCardHeader>

          <Styles.ContactCardFooter>
            <Text
              text="rua não sei o que la"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
              marginBottom={4}
            />

            <Text
              text="Salvador, Bahia - Brasil"
              align="center"
              color={colors.gray.dark01}
              size={10}
              weight="400"
              fontFamily="Dosis"
            />
          </Styles.ContactCardFooter>
        </Styles.ContactCard>
      </Styles.Content>
    </Styles.Container>
  )
}

export default ContactSection;
