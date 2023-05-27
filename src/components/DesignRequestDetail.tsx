import styled from "styled-components";

interface ContentProps {
    size?: number;
    color?: string;
}

interface ColorProps {
    bgColor?: string;
}

function DesignRequestDetail() {
    return (
        <Wrap>
            <ContentWrap>
                <ContentRowItemWrap>
                    <SvgRowContentWrap>

                        <Svg width={20} height={20}>
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
                        <Content size={20}>312</Content>
                    </SvgRowContentWrap>
                    <SvgRowContentWrap>
                        <Svg width={20} height={20}>
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
                        </Svg>
                        <Content size={20}>312</Content>
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
                        <Content size={20}>312</Content>
                    </SvgRowContentWrap>
                </ContentRowItemWrap>
                <Button>제안하기</Button>
            </ContentWrap>
            <ContentWrap>
                <ContentRowItemWrap>
                    <SvgRowContentWrap>
                        <Svg width={35} height={35}>
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
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </Svg>
                        <Content size={30}>
                            <span style={{ fontWeight: "bold" }}>수현</span>님의
                            디자인 요청
                        </Content>
                    </SvgRowContentWrap>
                </ContentRowItemWrap>
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
            </ContentWrap>
            <ContentColItemWrap>
                <SvgColContentWrap>
                    <Svg width={30} height={30}>
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
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>평수</Content>
                    <Content size={24}>10평 미만</Content>
                </SvgColContentWrap>

                <SvgColContentWrap>
                    <Svg width={30} height={30}>
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
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>주거 형태</Content>
                    <Content size={24}>원룸</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Svg width={30} height={30}>
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
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>스타일</Content>
                    <Content size={24}>모던</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Color bgColor={"#FFD8c1"}></Color>
                    <Content size={36}>메인 컬러</Content>
                    <Content size={24}>#FFD8C1</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Color bgColor={"#000"}></Color>
                    <Content size={36}>서브 컬러</Content>
                    <Content size={24}>#000</Content>
                </SvgColContentWrap>
            </ContentColItemWrap>
            <ContentItemWrap>
                <Content size={36}>
                    최대 가격:<b>150만원</b>
                </Content>
                <Content size={36}>
                    <span> | </span>
                </Content>
                <Content size={36}>5월 25일까지</Content>
                <Content size={36} color={"#808080"}>
                    <span>(14일 남음)</span>
                </Content>
            </ContentItemWrap>
        </Wrap>
    );
}

export default DesignRequestDetail;

// STYLED COMPONENTS
const Wrap = styled.div`
    margin: 40px 48px;
    /* width: 1344px; */
`;

const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

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

    & > span {
        color: ${(props) => props.color};
    }

    & > b {
        font-weight: bold;
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 9px;
    background-color: #1d2133;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 45px;
    width: 180px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #1d2133;
        background-color: #fff;
        border: 2px solid #1d2133;
    }

    cursor: pointer;
`;

const ContentColItemWrap = styled.div`
    margin: 150px 195px 50px 195px;
    display: flex;
    /* gap: 115px; */
    align-items: center;
`;

const SvgColContentWrap = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

const Color = styled.div<ColorProps>`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.bgColor};
`;

const ContentItemWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;
