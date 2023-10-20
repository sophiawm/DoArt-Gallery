import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const Button = styled.button`
  background: ${props => (props.black ? 'black' : 'black')};
  color: ${props => (props.black ? 'white' : 'white')};
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <ModalWrapper>
          <ModalContent>
            <p>Are you ready to check out?</p>
            <Button onClick={toggleModal} black>
              SHOP MORE
            </Button>
            <Button onClick={toggleModal}>
              CONTINUE
            </Button>
          </ModalContent>
        </ModalWrapper>
      )}
    </div>
  );
};

export default Modal;
