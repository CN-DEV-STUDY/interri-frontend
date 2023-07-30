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
import { DesignReqDetail } from './type';

/**
 * @description 디자인 요청 상세 컴포넌트
 */
function DesignRequestDetail() {
    //location
    const location = useLocation();
    const designReqId =
        location.state === null ? 15 : location.state.designReqId; // TODO 추후 지울 것

    // react-query
    const { isLoading, error, data } = useQuery<DesignReqDetail>({
        queryKey: ['getDesignReqDetail'],
        queryFn: () => getDesignReqDetail(15),
        refetchOnWindowFocus: false,

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
                styleNm={data?.styleNm}
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
