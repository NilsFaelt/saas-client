"use client";
import React, { FC, useState } from "react";
import {
  ButtonInputWrapperCollumn,
  Container,
  DisplayUrlWrapper,
  FormContainer,
  LabelAndInputContainer,
  StyledA,
  StyledImage,
} from "./AddBookmark.style";
import { AddButton, PrimaryButton } from "@/ui";
import { PrimaryInput, PrimaryLabel } from "@/styles";
import { MainText } from "@/ui/display/MainText/MainText.component";
import { useMutateAddBookmark } from "@/hooks";
import { createAValidUrl, validateUrl } from "../../utils";

interface Props {
  idToken: string;
  setToogleAddBookmarkContainer: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AddBookmark: FC<Props> = ({
  idToken,
  setToogleAddBookmarkContainer,
}) => {
  const [childUrl, setChildUrl] = useState("");
  const [childUrls, setChildUrls] = useState<string[]>([]);
  const hidePlusButton = childUrls.length < 3;
  const mainValidHttpUrl = createAValidUrl(childUrls[0]);
  const validHttpUrl = createAValidUrl(childUrl);
  const isUrl = validateUrl(validHttpUrl);
  const blockUrlInput = childUrls.length > 2;
  const { mutateAsync } = useMutateAddBookmark(
    idToken,
    mainValidHttpUrl,
    childUrls
  );

  const handleClick = () => {
    if (mainValidHttpUrl)
      mutateAsync()
        .then(() => {
          setToogleAddBookmarkContainer(false);
        })
        .catch(() => {
          console.log("couldnt add bookmark");
        });
  };

  const handleAddChildUrlOnClick = (childUrl: string) => {
    const validHttpUrl = createAValidUrl(childUrl);
    const isUrl = validateUrl(validHttpUrl);
    if (isUrl && validHttpUrl) {
      setChildUrls((prev) => [...prev, validHttpUrl]);
      setChildUrl("");
    }
  };
  return (
    <Container>
      {/* <LabelAndInputContainer>
        <PrimaryLabel>WEBSITE URL</PrimaryLabel>
        <MainText fontSize='12' margin='0'>
          Copy paste your website adress of choice
        </MainText>
        <MainText margin='0' fontSize='12'>
          or manually type in, ex: google.com
        </MainText>
        <PrimaryInput
          onChange={(e) => setUrl(e.target.value)}
          placeholder='www.mypage.com'
          required
        />
        {validHttpUrl && (
          <DisplayUrlWrapper>
            <MainText margin='0'>Try me first ?</MainText>
            <StyledA color='green' href={validHttpUrl} target='_blank'>
              {validHttpUrl}{" "}
              {isUrl && (
                <StyledImage
                  alt='Green check mark'
                  width={12}
                  height={12}
                  src='/svg/check.svg'
                />
              )}
            </StyledA>
          </DisplayUrlWrapper>
        )}
      </LabelAndInputContainer> */}
      <FormContainer>
        <LabelAndInputContainer>
          <PrimaryLabel>ADD BOOKMARK/URLS</PrimaryLabel>
          <MainText fontSize='12' margin='0'>
            Create bookmark, add on or multiple webadresses, by default you will
            get a main adress and underneath all your specific paths.
          </MainText>
          <ButtonInputWrapperCollumn>
            <PrimaryInput
              readOnly={blockUrlInput}
              onChange={(e) => setChildUrl(e.target.value)}
              placeholder='www.mypage.com/profile'
              value={childUrl}
            />{" "}
            {hidePlusButton && (
              <AddButton
                onClick={(e) => {
                  e.preventDefault();
                  handleAddChildUrlOnClick(childUrl);
                }}
              />
            )}
            {validHttpUrl && (
              <DisplayUrlWrapper>
                <MainText margin='0'>Try me first ?</MainText>
                <StyledA color='green' href={validHttpUrl} target='_blank'>
                  {validHttpUrl}{" "}
                  {isUrl && (
                    <StyledImage
                      alt='Green check mark'
                      width={12}
                      height={12}
                      src='/svg/check.svg'
                    />
                  )}
                </StyledA>
              </DisplayUrlWrapper>
            )}
          </ButtonInputWrapperCollumn>
          {mainValidHttpUrl && (
            <DisplayUrlWrapper>
              <MainText margin='0'>Main Url</MainText>
              <StyledA color='green' href={mainValidHttpUrl} target='_blank'>
                {mainValidHttpUrl}{" "}
                {mainValidHttpUrl && (
                  <StyledImage
                    alt='Green check mark'
                    width={12}
                    height={12}
                    src='/svg/check.svg'
                  />
                )}
              </StyledA>
            </DisplayUrlWrapper>
          )}
          {childUrls.length > 0 && (
            <>
              <DisplayUrlWrapper>
                <MainText margin='0'>Specific Urls</MainText>
                {childUrls.map((url, i) => {
                  return <ChildUrl key={i} url={url} />;
                })}
              </DisplayUrlWrapper>
            </>
          )}
        </LabelAndInputContainer>
      </FormContainer>

      <PrimaryButton
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        text={mainValidHttpUrl ? "SAVE BOOKMARK" : "ADD VALID URL"}
      />
    </Container>
  );
};

export const ChildUrl: FC<{ url: string }> = ({ url }) => {
  const validHttpUrl = createAValidUrl(url);
  const isUrl = validateUrl(validHttpUrl);

  return (
    <StyledA color='green' href={url} target='_blank'>
      {url}
      {isUrl && (
        <StyledImage
          alt='Green check mark'
          width={12}
          height={12}
          src='/svg/check.svg'
        />
      )}
    </StyledA>
  );
};
