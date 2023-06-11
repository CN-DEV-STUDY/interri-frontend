import styled from 'styled-components';

//swiper components & style
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, {
    Swiper as SwiperType,
    FreeMode,
    Navigation,
    Pagination,
    Autoplay,
} from 'swiper';
import { useRef } from 'react';

interface GridItemProps {
    mt?: number;
    size?: number;
}

interface ReqInfoDetailResources {
    infoId?: number; // 개별 요청 내용 id
    roomTypeNm?: string; // 공간
    content?: string; // 요청 내용
    imgPathList?: string[]; // 이미지 경로
}

interface Props {
    info?: ReqInfoDetailResources;
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

function DesignReqInfoContent({ info }: Props) {
    const swiperRef = useRef<SwiperType>();

    return (
        <Grid>
            <GridTextItem size={44} mt={150}>
                {info?.roomTypeNm}
            </GridTextItem>
            <SwiperView
                slidesPerView={1}
                modules={[FreeMode, Navigation]}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 5000 }} // 추가
            >
                {info?.imgPathList?.map((img, idx) => (
                    <SwiperItem>
                        <GridImgItem
                            key={idx.toString()}
                            src={
                                process.env.PUBLIC_URL +
                                '/images/design-req1.jpg'
                            }
                            // src={img}
                        />
                    </SwiperItem>
                ))}
            </SwiperView>
            <GridTextItem size={24}>{info?.content}</GridTextItem>
        </Grid>
    );
}

export default DesignReqInfoContent;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 150px;
`;

const GridTextItem = styled.div<GridItemProps>`
    font-size: ${(props) => props.size}px;
    margin-top: ${(props) => props.mt}px;
`;

const GridImgItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SwiperView = styled(Swiper)`
    width: 100%;
    height: 600px;
    padding-bottom: 35px;

    .swiper-pagination {
        /* z-index: 1; */
    }

    .swiper-button-prev {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgb(204, 200, 200, 0.5);
    }

    .swiper-button-next {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: rgb(204, 200, 200, 0.5);
    }
`;

const SwiperItem = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
`;
