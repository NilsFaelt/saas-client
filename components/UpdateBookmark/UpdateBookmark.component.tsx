import React, { FC, useContext, useEffect, useState } from "react";
import {
  ButtonWrapper,
  Container,
  DisplayUrlWrapper,
  StyledImage,
  StyledA,
  FlexRowContainer,
  FlexCollumnContainer,
} from "./UpdateBookmark.style";
import { useBookMarkById, useMutateDeleteBookmark } from "@/hooks";
import { BookmarkContext, MenuContext } from "@/context";
import { ChildUrls } from "@/types/bookmark";
import { MainText } from "@/ui/display/MainText/MainText.component";
import {
  createAValidUrl,
  extractMainPathUrl,
  validateUrl,
} from "@/features/Bookmark/utils";
import { ExtraConfirmButton, MainTitle, SecondaryButton } from "@/ui";
import { countTotalTodos } from "./utils";

interface Props {
  idToken: string;
}
export const UpdateBookmark: FC<Props> = ({ idToken }) => {
  const { setToogleUpdateBookmark, setToogleContentDisplay } =
    useContext(MenuContext);
  const { bookmarkId } = useContext(BookmarkContext);
  const [childUrls, setChildUrls] = useState<ChildUrls[] | null>(null);

  const { mutateAsync } = useMutateDeleteBookmark(idToken, bookmarkId);
  const handleDeleteOnClick = () => {
    mutateAsync()
      .then(() => {
        setToogleUpdateBookmark(false);
      })
      .catch(() => {
        console.log("couldnt delete bookmark");
      });
  };
  const { data } = useBookMarkById(idToken, bookmarkId);
  const todos = data?.content.filter((c) => c.todo && !c.done);
  const totalTodos = countTotalTodos(todos);
  const mainUrl = extractMainPathUrl(data?.url);
  useEffect(() => {
    if (data) {
      const { children } = data;
      setChildUrls(children ? children : null);
    }
  }, [data, idToken]);

  return (
    <Container>
      <MainTitle text={` ${mainUrl?.toUpperCase()}.COM`} underText='Bookamrk' />
      <FlexCollumnContainer>
        <FlexRowContainer>
          <StyledImage
            alt='wrtingpad'
            src={"svg/writingpad.svg"}
            width={15}
            height={15}
          />
          <MainText> todo: {totalTodos}</MainText>
        </FlexRowContainer>
        <SecondaryButton
          text='CONTENT/TODO'
          onClick={() => setToogleContentDisplay(true)}
        />
      </FlexCollumnContainer>
      <DisplayUrlWrapper>
        <MainText margin=''>Main Path</MainText>
        <StyledA target='_blank' href={data?.url}>
          {mainUrl}.com
        </StyledA>
      </DisplayUrlWrapper>
      <DisplayUrlWrapper>
        <MainText margin=''>Specfic Paths</MainText>

        {childUrls?.map((child, i) => {
          return <ChildUrl key={i} url={child.url} />;
        })}
      </DisplayUrlWrapper>
      <ButtonWrapper>
        <ExtraConfirmButton
          onClick={handleDeleteOnClick}
          text='DELETE BOOKAMARK'
        />
      </ButtonWrapper>
    </Container>
  );
};

export const ChildUrl: FC<{ url: string }> = ({ url }) => {
  const validHttpUrl = createAValidUrl(url);
  const isUrl = validateUrl(validHttpUrl);

  return (
    <FlexRowContainer>
      <StyledA target='_blank' href={url} color='green'>
        {url}
      </StyledA>
    </FlexRowContainer>
  );
};
