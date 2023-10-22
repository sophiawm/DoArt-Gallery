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
  border-radius: 10px;
  text-align: center;
  position: relative; /* Agregado para posicionar el botón de cierre correctamente */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const BlackButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const Modale = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const modals = [
    {
      title: 'Are you ready to check out?',
      buttons: ['SHOP MORE', 'CONTINUE']
    },
    {
      title: 'Thank you for your purchase!',
      content: 'Enjoy your new pieces',
      image: 'url_de_la_imagen'
    },
    {
      title: 'The item has been saved!',
      content: 'Enjoy your WORK',
      image: 'url_de_la_imagen'
    },
    {
      title: 'The item has been saved!',
      content: 'Enjoy your WORK',
      image: 'url_de_la_imagen'
    },
    {
      title: 'Are you ready to save?',
      buttons: ['GO BACK', 'CONFIRM']
    }
  ];

  const closeModal = () => {
    setModalIndex(null);
  };

  return (
    <div>
      {modalIndex !== null && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <h2>{modals[modalIndex].title}</h2>
            {modals[modalIndex].content && <p>{modals[modalIndex].content}</p>}
            {modals[modalIndex].image && <Image src={modals[modalIndex].image} alt="Modal Image" />}
            {modals[modalIndex].buttons && modals[modalIndex].buttons.map((buttonText, index) => (
              <BlackButton key={index} onClick={closeModal}>
                {buttonText}
              </BlackButton>
            ))}
          </ModalContent>
        </ModalWrapper>
      )}
      <button onClick={() => setModalIndex(0)}>Open Modal 1</button>
      <button onClick={() => setModalIndex(1)}>Open Modal 2</button>
      <button onClick={() => setModalIndex(2)}>Open Modal 3</button>
      <button onClick={() => setModalIndex(3)}>Open Modal 4</button>
      <button onClick={() => setModalIndex(4)}>Open Modal 5</button>
    </div>
  );
};

export default Modale;
