import { ROUTES_DESIGN_REQUEST_REGISTRATION } from "@/routes/routes";
import styled from "styled-components";
import Logo from "@/components/navbar/Logo";
import Menu from "@/components/navbar/Menu";
import CustomLink from "@/components/ui/CustomLink";
import Header from "@/components/headers/Header";
import ButtonLink from "@/components/ui/ButtonLink";
import UserProfile from "../navbar/UserProfile";
import UserMenu from "../navbar/UserMenu";

/**
 * @description 메인 헤더 컴포넌트
 */
const MainHeader = () => {
  // view
  return (
    <Header>
      <Logo />
      <Menu />
      <Wrapper>
        <ButtonLink to={ROUTES_DESIGN_REQUEST_REGISTRATION}>글 쓰기</ButtonLink>
        <UserProfile />
        <UserMenu />
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
