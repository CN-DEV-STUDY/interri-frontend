import styled from "styled-components";
import { Link } from "react-router-dom";

interface SocialItemProps {
  url?: string;
}

function SocialLogin() {
  return (
    <Wrap>
      <SocialItem url={"/images/google.png"} />
      <SocialItem url={"/images/kakao.png"} />
      <SocialItem url={"/images/naver.png"} />
    </Wrap>
  );
}

export default SocialLogin;

const Wrap = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 25px;
  align-items: center;
`;

const SocialItem = styled.div<SocialItemProps>`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-bottom: 30px;

  &:hover {
    cursor: pointer;
  }
`;
