import React, { useCallback, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

import * as Styles from './styles';

const Header: React.FC = () => {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  const handleOpenNavbar = useCallback(() => {
    setOpenedNavbar(!openedNavbar);
  }, [openedNavbar]);

  return (
    <>
      <Styles.Container>
        <Styles.Logo href="#">Portfol<p>io</p></Styles.Logo>

        <Styles.Navbar opened={openedNavbar}>
          <Styles.Options href="#home">Home</Styles.Options>
          <Styles.Options href="#about">Sobre</Styles.Options>
          <Styles.Options href="#skills">Habilidades</Styles.Options>
          <Styles.Options href="#services">Serviços</Styles.Options>
          <Styles.Options href="#projects">Projetos</Styles.Options>
          <Styles.Options href="#contact">Contato</Styles.Options>
        </Styles.Navbar>

        <Styles.MenuButton onClick={handleOpenNavbar}>
          {openedNavbar ? <GrClose /> : <GiHamburgerMenu />}
        </Styles.MenuButton>
      </Styles.Container>
    </>
  )
};

export default Header;
