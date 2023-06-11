import { getDesignReqDetail } from '@/api/designReq';
import DesignReqDetailCount from '@/components/design/designReq/DesignReqDetailCount';
import DesignReqDetailSubInfo from '@/components/design/designReq/DesignReqDetailSubInfo';
import DesignReqDetailUser from '@/components/design/designReq/DesignReqDetailUser';
import DesignReqContent from '@/components/design/designReq/DesignReqContent';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DesignReqInfoContent from '@/components/design/designReq/DesignReqInfoContent';
import DesignReqResList from '@/components/design/designReq/DesignReqResList';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';

interface DesignReqDetail {
    id: number; // 요청 id
    userId: string; // 요청 등록자
    sizeNm: string; // 평수
    housingTypeNm: string; // 주거 형태
    mainColor: string; // 메인 컬러
    subColor: string; // 서브 컬러
    maxPrice: number; // 최대 가격
    dueDate: string; // 만기일
    viewCnt: number;
    scrabCnt: number;
    reqInfoDetailResources: ReqInfoDetailResources[]; // 디자인 요청 정보
    reqDetailResResources: ReqDetailResResources[]; // 디자인 요청에 대한 응답
}

interface ReqInfoDetailResources {
    infoId: number; // 개별 요청 내용 id
    roomTypeNm: string; // 공간
    content: string; // 요청 내용
    imgPathList: string[]; // 이미지 경로
}

interface ReqDetailResResources {
    id: number; // 응답 id
    nickname: string; // 응답 등록자 닉네임
    profileImgPath: string; // 프로필 이미지 경로
    profileImgNm: string; // 프로필 이미지 파일 이름
    adoptionCnt: number; // 채택수
    price: number; // 제시 가격
    repImgPath: string; // 대표 응답 이미지 경로
}

/**
 * @description 디자인 요청 상세 컴포넌트
 */
function DesignRequestDetail() {
    //location
    const location = useLocation();
    const designReqId =
        location.state === null ? 1 : location.state.designReqId; // TODO 추후 지울 것

    // react-query
    const { isLoading, error, data } = useQuery<DesignReqDetail>({
        queryKey: ['getDesignReqDetail'],
        queryFn: () => getDesignReqDetail(1),
        // queryFn: () => getDesignReqDetail(designReqId),
    });

    console.log('data : >>> ', data);

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + (error as Error)?.message;

    return (
        <Wrap>
            <ContentWrap>
                <DesignReqDetailCount
                    viewCnt={data?.viewCnt}
                    scrabCnt={data?.scrabCnt}
                    commentCnt={
                        data && data.reqDetailResResources
                            ? data.reqDetailResResources.length
                            : 0
                    }
                />
                <Button>제안하기</Button>
            </ContentWrap>
            <ContentWrap>
                <DesignReqDetailUser userId={data?.userId} />
                <DesignReqDetailSubInfo />
            </ContentWrap>
            <DesignReqContent
                sizeNm={data?.sizeNm}
                mainColor={data?.mainColor}
                subColor={data?.subColor}
                housingType={data?.housingTypeNm}
                dueDate={data?.dueDate}
                maxPrice={data?.maxPrice}
            />

            {data?.reqInfoDetailResources.map((info) => (
                <DesignReqInfoContent key={info.infoId} info={info} />
            ))}

            <DesignReqResList res={data?.reqDetailResResources} />
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
