import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Container } from './styles';

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div className='content'>
        <h1 className='logo'>countries<strong>.app</strong></h1>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={<LightModeIcon />}
          uncheckedIcon={<DarkModeIcon className="light" />}
          height={25}
          width={50}
          handleDiameter={25}
          offColor={shade(0.15, colors.primary)}
          onColor={shade(0.15, colors.secundary)}
        />
      </div>
    </Container>
  );
};

export default Header;