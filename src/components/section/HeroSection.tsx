import styled from 'styled-components';
import Section from '@/components/common/Section';
import Image from '@/components/ui/Image';
import { useState } from 'react';
import { DotsProps, HeroType } from '../pages/index/types';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <HeroTextBox>
                            <h1>지금 당신의 공간을 디자인 하세요</h1>
                            <p>
                                인테리는 <strong>{numberOfDesigners}</strong>
                                명의 디자이너와 함께하고 있습니다
                            </p>
                        </HeroTextBox>
                        <Image
                            path={
                                process.env.PUBLIC_URL +
                                '/images/hero-image.jpg'
                            }
                            height={50}
                            width={35}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroTextBox>
                            <h2>지금 당신의 공간을 디자인 하세요</h2>
                            <p>
                                인테리는 <strong>3</strong>
                                명의 디자이너와 함께하고 있습니다
                            </p>
                        </HeroTextBox>
                        <Image
                            path={
                                process.env.PUBLIC_URL +
                                '/images/hero-image.jpg'
                            }
                            height={50}
                            width={35}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroTextBox>
                            <h3>지금 당신의 공간을 디자인 하세요</h3>
                            <p>
                                인테리는 <strong>4</strong>
                                명의 디자이너와 함께하고 있습니다
                            </p>
                        </HeroTextBox>
                        <Image
                            path={
                                process.env.PUBLIC_URL +
                                '/images/hero-image.jpg'
                            }
                            height={50}
                            width={35}
                        />
                    </SwiperSlide>
                </Swiper>
            </Flex>
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
    justify-content: center;
    width: 130rem;
    margin: 5rem 0;

    .swiper {
        padding: 0 100px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .swiper-button-prev {
        /* background-color: red; */
        color: #fff;
    }
`;
