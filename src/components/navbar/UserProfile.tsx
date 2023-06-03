import styled from "styled-components";
import { MouseEvent } from "react";

/**
 * @description 유저 프로필 컴포넌트
 */

interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function UserProfile({ onClick }: Props) {
  // view
  return <Circle onClick={onClick} />;
}

export default UserProfile;

// STYLED COMPONENTS
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: aqua;
  border-radius: 50%;
`;
