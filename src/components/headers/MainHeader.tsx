import { ROUTES_DESIGN_REQUEST_REGISTRATION } from "@/routes/routes";
import styled from "styled-components";
import Logo from "@/components/navbar/Logo";
import Menu from "@/components/navbar/Menu";
import CustomLink from "@/components/ui/CustomLink";
import Header from "@/components/headers/Header";
import ButtonLink from "@/components/ui/ButtonLink";
import UserProfile from "../navbar/UserProfile";
import UserMenu from "../navbar/UserMenu";
import { useState } from "react";

/**
 * @description 메인 헤더 컴포넌트
 */
const MainHeader = () => {
  const [click, setClick] = useState<boolean>(false);
  const onClickUserMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("click!!!!!!!");
    console.log("click  >>> ", click);
    setClick((prevState) => !prevState);
  };
  // view
  return (
    <Header>
      <Logo />
      <Menu />
      <Wrapper>
        <ButtonLink to={ROUTES_DESIGN_REQUEST_REGISTRATION}>글 쓰기</ButtonLink>
        <UserProfile onClick={onClickUserMenu} />

        {click && <UserMenu />}
      </Wrapper>
    </Header>
  );
};

export default MainHeader;

// STYLED COMPONENTS
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  position: relative;
`;
