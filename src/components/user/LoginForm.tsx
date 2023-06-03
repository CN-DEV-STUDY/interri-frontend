import styled from "styled-components";

import Input from "../ui/Input";

function LoginForm() {
  return (
    <>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Button>로그인</Button>
    </>
  );
}

export default LoginForm;

const Button = styled.button`
  border: none;
  border-radius: 9px;
  background-color: #1d2133;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 45px;
  width: 300px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
