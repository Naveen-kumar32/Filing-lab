import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px; 
  left: 28px;
  z-index: 1000;
  cursor: pointer;
  background-color: #25d366;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ebd5a;
    transform: scale(1.1);
  }
`;

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/9150052027", "_blank");
  };

  return (
    <WhatsAppButtonWrapper onClick={handleClick}>
      <FaWhatsapp size={28} />
    </WhatsAppButtonWrapper>
  );
};

export default WhatsAppButton;
