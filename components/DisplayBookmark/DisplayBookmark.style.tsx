import { theme } from "@/styles";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(-100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    z-index: 0;
    transform: translateY(100%);
  }
  30% {
    z-index: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    z-index: 3;
    transform: translateY(0);
  }
`;

export const BookmarkContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  width: calc(7rem + 6vw);
  min-width: 10rem;
  height: 5rem;
  cursor: pointer;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  word-break: break-all;
  &:hover {
    color: ${theme.colors.primary};
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};
    /* background-color: ${theme.colors.extra}; */
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }
`;

export const Container = styled.div`
  position: relative;
  diplay: flex;
  flex-direction: column;

  &:hover ${BookmarkContainer} {
    box-shadow: 0 0 1rem ${theme.colors.secondary};
  }
`;
export const DropDownContainer = styled.div`
  position: absolute;
  background-color: ${theme.colors.backgroundPrimary};
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  width: calc(7rem + 6vw);

  z-index: 5;
`;
export const DropUpContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  z-index: 2;
  animation: ${fadeInUp} 0.5s ease-in-out forwards;
  width: calc(7rem + 6vw);
  min-width: 10rem;
  margin-bottom: 0.3rem;
`;
export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  align-items: center;
  justify-content: center;
`;

export const InnerDropUpContainer = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  gap: 1vw;
  display: flex;
`;
export const SvgImage = styled(Image)``;
export const DropDownChildren = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 0.3rem;
  width: calc(7rem + 6vw);
  height: 3.5rem;
  cursor: pointer;
  font-size: 0.7rem;
  background-color: black;
  border: 0.1rem solid ${theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 1rem ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  width: 100%;
  &:hover {
    ${theme.colors.primary}
  }
`;

export const StyledA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.3rem;
  width: calc(7rem + 6vw);
  min-width: 10rem;
  height: 3.5rem;
  word-break: break-all;
  cursor: pointer;
  text-align: center;
  background-color: black;
  font-size: 0.7rem;
  border: 0.1rem solid ${theme.colors.primary};
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  &:hover {
    ${theme.colors.primary}
  }
`;

export const DeleteConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  word-break: break-all;
  cursor: pointer;
  text-align: center;
  background-color: black;
  font-size: 0.7rem;
  border: 0.1rem solid ${theme.colors.primary};
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  text-decoration: none;
  width: 100%;

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 15px ${theme.colors.secondary};

    color: ${theme.colors.primary};
  }
  &:active {
    box-shadow: 0 0 0px rgba(128, 0, 128, 0.5);
  }

  &:hover {
    ${theme.colors.primary}
  }
`;

export const StyledImage = styled.img``;
