"use client";
import React, { FC, useContext, useRef, useState } from "react";
import {
  ProfileContainer,
  Container,
  Name,
  ButtonWrapper,
  StyledImage,
  DropDownContainer,
} from "./ProfileCard.style";
import { auth } from "@/firebase";

import { LoggedinUserContext } from "@/context/LoggedInUserContext";
// import { DropDownContainer } from "@/styles";
import { DeleteAccountButton, PrimaryButton } from "@/ui";
import { useClickOustsideToClose } from "@/hooks";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { NavLink } from "../ConsoleNavAside/components";

export const ProfileCard: FC = () => {
  const ref = useRef(null);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  const { loggedInUser } = useContext(LoggedinUserContext);
  useClickOustsideToClose(ref, setToogleDropDown);
  const user = auth.currentUser;

  if (!loggedInUser || !user) return null;
  const { displayName, email } = loggedInUser;
  const userImageUrl = user?.photoURL ? user?.photoURL : "/svg/web.svg";

  return (
    <Container ref={ref} onClick={() => setToogleDropDown(true)}>
      <ProfileContainer>
        <Name>{displayName}</Name>
      </ProfileContainer>
      {toogleDropDown && (
        <DropDownContainer>
          <StyledImage src={userImageUrl} width={50} height={50} />
          <MainText margin='1' color='white'>
            {email}
          </MainText>
          {/* <ButtonWrapper>
            <DeleteAccountButton />
          </ButtonWrapper> */}
          <NavLink text='My Settings' linkPath='/' svgPath='/svg/web.svg' />
        </DropDownContainer>
      )}
    </Container>
  );
};
