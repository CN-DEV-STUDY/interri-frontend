import styled from 'styled-components';

interface ContentProps {
    size?: number;
    color?: string;
}

interface Props {
    userId?: string;
}

/**
 * @description 디자인 요청 상세 > 디자인 요청글 등록자 컴포넌트 (ㅇㅇ님의 디자인 요청)
 */
function DesignReqDetailUser({ userId }: Props) {
    return (
        <ContentRowItemWrap>
            <SvgRowContentWrap>
                <Svg width={35} height={35}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                    </svg>
                </Svg>
                <Content size={30}>
                    <span style={{ fontWeight: 'bold' }}>{userId}</span>님의
                    디자인 요청
                </Content>
            </SvgRowContentWrap>
        </ContentRowItemWrap>
    );
}

export default DesignReqDetailUser;

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
