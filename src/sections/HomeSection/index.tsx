import React from 'react';

import hello from '../../assets/undraw_mello_otq1.svg'

import * as Styles from './styles';

const HomeSection: React.FC = () => {
  return (
    <Styles.Container>
      <h1>Hello World!</h1>

      <Styles.ImageDiv src={hello} />
    </Styles.Container>
  )
}

export default HomeSection;
