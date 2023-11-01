import React, { FC, useRef, useState } from "react";
import {
  Container,
  ExtraText,
  LabelAndButtonContainer,
} from "./LoginPopUp.style";
import { LogginButton, LoginWithEmailAndPasswordButton, MainTitle } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { useClickOustsideToClose } from "@/hooks";

interface Props {
  setTooglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginPopUp: FC<Props> = ({ setTooglePopUp }) => {
  const ref = useRef(null);
  useClickOustsideToClose(ref, setTooglePopUp);
  const [toogleCreateAccount, setTooglecreateAccount] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <>
      {!toogleCreateAccount ? (
        <Container ref={ref}>
          <MainTitle text='Login' underText='Fango console' />
          <LogginButton />
          <LabelAndButtonContainer>
            <PrimaryInput
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
            <PrimaryInput
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
              type='password'
            />
            <ExtraText
              onClick={() => setTooglecreateAccount(!toogleCreateAccount)}
            >
              Create account?
            </ExtraText>
            <LoginWithEmailAndPasswordButton
              create={toogleCreateAccount}
              email={email}
              password={password}
            />
          </LabelAndButtonContainer>
        </Container>
      ) : (
        <Container ref={ref}>
          <MainTitle text='Create User' underText='Fango console' />
          <LogginButton />
          <LabelAndButtonContainer>
            <PrimaryInput
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
            <PrimaryInput
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
              type='password'
            />
            <ExtraText
              onClick={() => setTooglecreateAccount(!toogleCreateAccount)}
            >
              Login?
            </ExtraText>
            <LoginWithEmailAndPasswordButton
              create={toogleCreateAccount}
              email={email}
              password={password}
            />
          </LabelAndButtonContainer>
        </Container>
      )}
    </>
  );
};
