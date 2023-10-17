import React from 'react';
import styled from 'styled-components';
import logo from './ruta/al/logo.png'; // Poner logo en esta ruta

const FooterContainer = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px; // Arreglar el tamaño
`;

const FooterText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Logo" />
      <FooterText>Find the art you love</FooterText>
    </FooterContainer>
  );
};

export default Footer;
