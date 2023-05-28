import styled from "styled-components";
interface ContentProps {
    size?: number;
    color?: string;
}

function DesignReqDetailSubInfo() {
    return (
        <ContentRowItemWrap>
            <SvgRowContentWrap>
                <Svg width={24} height={24}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                    </svg>
                </Svg>
                <Content size={24}>공유하기</Content>
            </SvgRowContentWrap>
            <SvgRowContentWrap>
                <Svg width={24} height={24}>
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
                </Svg>
                <Content size={24}>스크랩</Content>
            </SvgRowContentWrap>
            <Content size={24}>2023-02-23</Content>
        </ContentRowItemWrap>
    );
}

export default DesignReqDetailSubInfo;

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

    & > b {
        font-weight: bold;
    }
`;
