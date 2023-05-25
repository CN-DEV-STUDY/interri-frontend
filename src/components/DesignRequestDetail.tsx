import styled from "styled-components";

function DesignRequestDetail() {
  return (
    <ContentWrap>
      <SubIconButtonWrap>
        <IconButtonWrap>
          <IconNumberWrap>
            <IconNumberItemWrap>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </Icon>
              <Number>312</Number>
            </IconNumberItemWrap>
            <IconNumberItemWrap>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </Icon>
              <Number>23</Number>
            </IconNumberItemWrap>
            <IconNumberItemWrap>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={"20px"}
                height={"20px"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <Number>223</Number>
            </IconNumberItemWrap>
          </IconNumberWrap>
          <Button>제안하기</Button>
        </IconButtonWrap>
      </SubIconButtonWrap>
    </ContentWrap>
  );
}

export default DesignRequestDetail;

// STYLED COMPONENTS
const ContentWrap = styled.div`
  margin: 48px;
  /* width: 1344px; */
`;

const SubIconButtonWrap = styled.div`
  margin: 40px;
  display: flex;
`;
const IconButtonWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  /* gap: 18px; */
`;
const IconNumberWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const IconNumberItemWrap = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

const Number = styled.p`
  font-size: 20px;
`;

// STYLED COMPONENTS
const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1d2133;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 48px;

  width: 180px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
