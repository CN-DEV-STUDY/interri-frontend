import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

function DesignReqInfoContent({ info }: Props) {
    return (
        <Grid>
            <GridTextItem size={44} mt={150}>
                {info?.roomTypeNm}
            </GridTextItem>
            {info?.imgPathList?.map((img, idx) => (
                <GridImgItem
                    key={idx.toString()}
                    src={process.env.PUBLIC_URL + '/images/design-req1.jpg'}
                    // src={img}
                />
            ))}
            <GridTextItem size={24}>{info?.content}</GridTextItem>
        </Grid>
    );
}

export default DesignReqInfoContent;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    row-gap: 30px;
`;

const GridTextItem = styled.div<GridItemProps>`
    font-size: ${(props) => props.size}px;
    margin-top: ${(props) => props.mt}px;
`;

const GridImgItem = styled.img`
    width: 100%;
    height: 800px;
`;
