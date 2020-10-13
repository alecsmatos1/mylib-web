import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { HeaderContainer, HeaderTextContainer } from './styles';

const NavBar: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Mylib Logo" />

      <HeaderTextContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <text style={{ color: '#6868ff', fontWeight: 'bold' }}>Livros</text>
        </Link>
        <Link to="/addbook" style={{ textDecoration: 'none' }}>
          <text>Adicionar</text>
        </Link>
        <text>Categorias</text>
        <text>Login</text>
      </HeaderTextContainer>
    </HeaderContainer>
  );
};

export default NavBar;
