import styled from 'styled-components';
import Section from '@/components/common/Section';
import Image from '@/components/ui/Image';
import { useState } from 'react';
import { HeroType } from '../pages/index/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

type Props = {
    heroSection: HeroType;
};

SwiperCore.use([Navigation, Pagination, Autoplay]);

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
                    modules={[FreeMode, Pagination, Navigation]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 10000 }}
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
                            <h2>인기 디자인을 확인하세요</h2>
                            <p>
                                <strong>채수현</strong> 디자이너
                            </p>
                        </HeroTextBox>
                        <Image
                            path={
                                process.env.PUBLIC_URL +
                                '/images/design-req1.jpg'
                            }
                            height={50}
                            width={35}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <HeroTextBox>
                            <h2>지금 당신의 공간을 디자인 하세요</h2>
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

    h1,
    h2 {
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
        padding: 30px 100px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .swiper-button-prev {
        color: #fff;
    }
`;
