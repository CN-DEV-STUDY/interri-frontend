import styled from "styled-components";

/**
 * @description 유저 프로필 컴포넌트
 */
function UserProfile() {
  // view
  return <Circle />;
}

export default UserProfile;

// STYLED COMPONENTS
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: aqua;
  border-radius: 50%;
`;
