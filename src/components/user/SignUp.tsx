import styled from "styled-components";
import SocialLogin from "./SocialLogin";
import Input from "../ui/Input";

interface ContentProps {
  size?: number;
  color?: string;
  mb?: number;
  weight?: string | number;
}

interface WrapProps {
  bb?: string;
  sort?: string;
}

function SignUp() {
  return (
    <Wrap>
      <WrapContent bb={"#bfbfbf"}>
        <Content size={30} mb={30} weight={"bold"}>
          회원가입
        </Content>
        <ContentWrap sort={"center"}>
          <Content size={14} color={"#808080"}>
            sns 계정으로 간편 로그인 / 회원가입
          </Content>
          <SocialLogin />
        </ContentWrap>
      </WrapContent>

      <WrapContent>
        <Content size={24} mb={15} weight={"bold"}>
          이메일
        </Content>

        <ContentWrap>
          <EmailWrap>
            <Input width={130} placeholder={"이메일"} />
            <Content size={20}>@</Content>
            <Select>
              <option value="">선택하세요</option>
            </Select>
          </EmailWrap>
          <Button>이메일 인증하기</Button>
        </ContentWrap>
      </WrapContent>

      <WrapContent>
        <Content size={24} mb={15} weight={"bold"}>
          비밀번호
        </Content>
        <Content size={14} mb={15} color={"#B8B6B6"}>
          영문, 숫자를 포함한 8자 이상 입력해주세요.
        </Content>
        <ContentWrap>
          <Input placeholder={"비밀번호"} />
        </ContentWrap>
      </WrapContent>

      <WrapContent>
        <Content size={24} mb={15} weight={"bold"}>
          비밀번호 확인
        </Content>
        <ContentWrap>
          <Input placeholder={"비밀번호 확인"} />
        </ContentWrap>
      </WrapContent>

      <WrapContent>
        <Content size={24} mb={15} weight={"bold"}>
          닉네임
        </Content>
        <Content size={14} mb={15} color={"#B8B6B6"}>
          다른 사용자와 겹치지 않도록 입력해주세요.
        </Content>
        <ContentWrap>
          <Input placeholder={"별명 (2~15자)"} />
        </ContentWrap>
      </WrapContent>

      <WrapContent>
        <ContentWrap>
          <Button>회원가입</Button>
        </ContentWrap>
      </WrapContent>
    </Wrap>
  );
}

export default SignUp;

const Wrap = styled.div`
  margin: 0 48px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const WrapContent = styled.div<WrapProps>`
  width: 300px;
  border-bottom: ${(props) => (props.bb ? `1px solid ${props.bb}` : "none")};
`;

const ContentWrap = styled.div<WrapProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.sort ? "center" : "start")};
  gap: 20px;
`;

const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: start;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : "#1D2133 ")};
  margin-bottom: ${(props) => props.mb}px;
  font-weight: ${(props) => props.weight};
`;

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

const EmailWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

const Select = styled.select`
  width: 130px;
  height: 5rem;
  border-radius: 9px;
  font-size: 14px;
  border-color: #96a6cc;
  /* color: #96a6cc; */
  padding-left: 18px;

  /* 기본 화살표를 제거하기 위한 코드 */
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  /* SVG 화살표 이미지를 설정하는 코드 */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>');
  background-repeat: no-repeat;
  background-position: calc(100% - 1.5rem) center !important;
  background-size: 16px; /* 원하는 크기로 조정하세요 */
`;
