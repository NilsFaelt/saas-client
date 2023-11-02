import React, { FC, ReactNode, useContext, useEffect } from "react";
import {
  BlackBackgroundContainer,
  Container,
  DocsButtonWrapper,
} from "./ConsoleLayout.style";
import { ConsoleNavAside, ProfileCard } from "@/components";
import { UnderConstrusction } from "@/components/UnderConstrusction";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner.component";
import { MenuContext } from "@/context";
import { DocsPopUpView } from "@/features";
import { ButtonWithRings, PrimaryButton } from "@/ui";

interface Props {
  children: ReactNode;
}

export const ConsoleLayout: FC<Props> = ({ children }) => {
  const {
    toogleBlacBackgroundDisplay,
    setToogleBlacBackgroundDisplay,
    setToogleDocs,
    toogleDocs,
  } = useContext(MenuContext);
  return (
    <Container>
      {/* <UnderConstrusction /> */}

      <CookieBanner />
      <ConsoleNavAside />
      <BlackBackgroundContainer
        onClick={() => setToogleBlacBackgroundDisplay(false)}
        $zindex={toogleBlacBackgroundDisplay ? 1 : 0}
      />
      {children}
      {toogleDocs && <DocsPopUpView />}
      <DocsButtonWrapper>
        <PrimaryButton
          text='DOCUMENTATION'
          onClick={() => setToogleDocs(true)}
        />
      </DocsButtonWrapper>
    </Container>
  );
};

export default ConsoleLayout;
