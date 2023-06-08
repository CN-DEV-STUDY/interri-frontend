import userState from "@/global/user/userState";
import { ROUTES_LOGIN, ROUTES_SIGN_UP } from "@/routes/routes";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";

type LinkProps = {
  onClick?: () => void;
};
/**
 * @description 유저 메뉴 컴포넌트
 */
const UserMenu = () => {
  // global
  const [userStateValue, setUserState] = useRecoilState(userState);
  const { isLoggedIn } = userStateValue;

  console.log("isLoggedIn >>>> ", isLoggedIn);

  const onLogout = () => {
    console.log("logout");
    setUserState({ isLoggedIn: false });
  };

  // view
  return (
    <Wrap>
      {!isLoggedIn ? (
        <>
          <ProfileLink to={ROUTES_LOGIN}>로그인</ProfileLink>
          <ProfileLink to={ROUTES_SIGN_UP}>회원가입</ProfileLink>
        </>
      ) : (
        <>
          <ProfileLink to={"#"}>알림</ProfileLink>
          <ProfileLink to={"#"}>메세지</ProfileLink>
          <ProfileLink to={"#"}>마이페이지</ProfileLink>
          <ProfileLink to={"#"} onClick={onLogout}>
            로그아웃
          </ProfileLink>
        </>
      )}
    </Wrap>
  );
};

export default UserMenu;

// STYLED COMPONENTS
const Wrap = styled.div`
  width: 150px;
  height: 320px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  position: absolute;
  border-radius: 9px;

  z-index: 1; /*맨 앞으로 가져오기 */
  top: 50%;
  left: 20%;
  transform: translateY(10%);

  background-color: #f8f9fa;
  border: 1px solid #e7e8e9;
`;

const ProfileLink = styled(Link)<LinkProps>`
  font-size: 20px;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline dotted red;
    color: red;
  }
`;
