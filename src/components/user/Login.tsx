import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

interface ContentProps {
  size?: number;
  color?: string;
  mb?: number;
}

function Login() {
  return (
    <Wrap>
      <WrapContent>
        <Content size={44} mb={20}>
          LOGO INTERRI
        </Content>
        <LoginForm />
        <SubContentWrap>
          <NavLink to={""}>비밀번호 재설정</NavLink>
          <NavLink to={""}>회원가입</NavLink>
        </SubContentWrap>
        <Content size={14} color={"#808080"}>
          sns 계정으로 간편 로그인 / 회원가입
        </Content>
        <SocialLogin />
      </WrapContent>
    </Wrap>
  );
}

export default Login;

const Wrap = styled.div`
  margin: 0 48px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContent = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Content = styled.div<ContentProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : "#1D2133 ")};
  margin-bottom: ${(props) => props.mb}px;
`;

const SubContentWrap = styled.div`
  display: flex;
  gap: 20px;

  margin-top: 5px;
  margin-bottom: 30px;
`;

const NavLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline dotted red;
    color: red;
  }
`;
