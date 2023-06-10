import styled from 'styled-components';
import Section from '@/components/common/Section';
import Image from '@/components/ui/Image';
import { useState } from 'react';
import { DotsProps, HeroType } from '../pages/index/types';

type Props = {
    heroSection: HeroType;
};

/**
 * @description HeroSection 컴포넌트
 */
const HeroSection = ({ heroSection }: Props) => {
    // read only
    const { numberOfDesigners } = heroSection;

    // state
    // TODO: 세터에 0~5사이의 값 인지 체크하는 로직 필요
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

    return (
        <Section width={'large'} color={'#1D2133'}>
            <Flex>
                <button>
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
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </button>
                <HeroTextBox>
                    <h1>지금 당신의 공간을 디자인 하세요</h1>
                    <p>
                        인테리는 <strong>{numberOfDesigners}</strong>명의
                        디자이너와 함께하고 있습니다
                    </p>
                </HeroTextBox>
                <Image
                    path={process.env.PUBLIC_URL + '/images/hero-image.jpg'}
                    height={50}
                    width={35}
                />
                <button>
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
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </button>
            </Flex>
            <Dots currentPageNumber={currentPageNumber}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Dots>
        </Section>
    );
};

export default HeroSection;

// style
const HeroTextBox = styled.div`
    color: #fff;

    h1 {
        font-size: 4.4rem;
        line-height: 5.2rem;
        font-weight: 700;
        color: inherit;
        margin-bottom: 2rem;
    }

    p {
        color: inherit;
        font-size: 2.4rem;
        line-height: 3.8rem;
        letter-spacing: 0.75px;
        width: 30.5rem;

        strong {
            color: inherit;
            font-weight: 700;
            font-size: 3rem;
        }
    }
`;

const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 108.5rem;
    margin: 5rem 10rem;

    button {
        position: absolute;

        width: 40px;
        height: 40px;
        background: none;
        border: none;
        cursor: pointer;

        svg {
            stroke: #fff;
        }
    }

    // 왼쪽 방향 버튼
    button:first-child {
        left: -150px;
        top: 50%;
        transform: translate(0%, -50%);
    }

    // 오른쪽 방향 버튼
    button:last-child {
        right: -150px;
        top: 50%;
        transform: translate(0%, -50%);
    }
`;

const Dots = styled.div<DotsProps>`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 5px;

    div {
        border-radius: 50%;
        width: 5px;
        height: 5px;
        background-color: #fff;
    }

    ${(props) =>
        `div:nth-child(${props.currentPageNumber}) {
			background-color: #7486CC;
		}`}
`;
