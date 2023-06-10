import { dueDateFormat } from '@/utils/dueDateFormat';
import { priceFormat } from '@/utils/priceFormat';
import styled from 'styled-components';

interface ContentProps {
    size?: number;
    color?: string;
}

interface ColorProps {
    bgColor?: string;
}

interface detailProps {
    sizeNm?: string; // 평수
    housingType?: string; // 주거 형태
    mainColor?: string; // 메인 컬러
    subColor?: string; // 서브 컬러
    maxPrice?: number; // 최대 가격
    dueDate?: string; // 만기일
}

/**
 * @description 디자인 요청 상세 > 평수, 주거형태, 스타일, 메인컬러, 서브컬러 컴포넌트
 */
function DesignReqInfoContent({
    sizeNm,
    housingType,
    mainColor,
    subColor,
    maxPrice,
    dueDate,
}: detailProps) {
    const date = new Date(`${dueDate}`);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const remainDate = dueDateFormat(dueDate);
    const price = priceFormat(maxPrice);

    return (
        <>
            <ContentColItemWrap>
                <SvgColContentWrap>
                    <Svg width={40} height={40}>
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
                                d='M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15'
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>평수</Content>
                    <Content size={24}>{sizeNm}</Content>
                </SvgColContentWrap>

                <SvgColContentWrap>
                    <Svg width={40} height={40}>
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
                                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>주거 형태</Content>
                    <Content size={24}>{housingType}</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Svg width={40} height={40}>
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
                                d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
                            />
                        </svg>
                    </Svg>
                    <Content size={36}>스타일</Content>
                    <Content size={24}>모던</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Color bgColor={mainColor}></Color>
                    <Content size={36}>메인 컬러</Content>
                    <Content size={24}>{mainColor}</Content>
                </SvgColContentWrap>
                <SvgColContentWrap>
                    <Color bgColor={subColor}></Color>
                    <Content size={36}>서브 컬러</Content>
                    <Content size={24}>{subColor}</Content>
                </SvgColContentWrap>
            </ContentColItemWrap>
            <ContentItemWrap>
                <Content size={36}>
                    최대 가격:<b>{price}</b>
                </Content>
                <Content size={36}>
                    <span> | </span>
                </Content>
                <Content size={36}>
                    {month}월 {day}일까지
                </Content>
                <Content size={36} color={'#808080'}>
                    <span>({remainDate}일 남음)</span>
                </Content>
            </ContentItemWrap>
        </>
    );
}

export default DesignReqInfoContent;

const ContentColItemWrap = styled.div`
    margin: 150px 195px 50px 195px;
    display: flex;
    /* gap: 115px; */
    align-items: center;
    justify-content: space-evenly;
`;

const SvgColContentWrap = styled.div`
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

const Color = styled.div<ColorProps>`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.bgColor};
    box-shadow: 0px 0px 2px #5b5b5b;
`;

const ContentItemWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
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
const Svg = styled.svg`
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
`;
