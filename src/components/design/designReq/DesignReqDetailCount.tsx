import styled from "styled-components";
interface ContentProps {
  size?: number;
  color?: string;
}

interface detailProps {
  viewCnt?: number; // 조회수
  scrabCnt?: number; // 스크랩수
  commentCnt?: number;
}

/**
 * @description 디자인 요청 상세 > 스크랩수, 댓글수, 조회수 컴포넌트
 */
function DesignReqDetailCount({ viewCnt, scrabCnt, commentCnt }: detailProps) {
  return (
    <ContentRowItemWrap>
      <SvgRowContentWrap>
        <Svg width={20} height={20}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </Svg>
        <Content size={20}>{scrabCnt}</Content>
      </SvgRowContentWrap>
      <SvgRowContentWrap>
        <Svg width={20} height={20}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </Svg>
        <Content size={20}>{commentCnt}</Content>
      </SvgRowContentWrap>
      <SvgRowContentWrap>
        <Svg width={20} height={20}>
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
        </Svg>
        <Content size={20}>{viewCnt}</Content>
      </SvgRowContentWrap>
    </ContentRowItemWrap>
  );
}

export default DesignReqDetailCount;

const ContentRowItemWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SvgRowContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Svg = styled.svg`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
`;

const Content = styled.div<ContentProps>`
  font-size: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
`;
