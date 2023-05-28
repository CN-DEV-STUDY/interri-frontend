import { getDesignReqDetail } from "@/api/designReq";
import DesignReqDetailCount from "@/components/designReq/DesignReqDetailCount";
import DesignReqDetailSubInfo from "@/components/designReq/DesignReqDetailSubInfo";
import DesignReqDetailUser from "@/components/designReq/DesignReqDetailUser";
import DesignReqInfoContent from "@/components/designReq/DesignReqInfoContent";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

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
    roomType: string; // 공간
    content: string; // 요청 내용
    imgPath: string[]; // 이미지 경로
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

    //global

    //state
    const [detail, setDetail] = useState<DesignReqDetail>();

    //watch
    useEffect(() => {
        const designReqId =
            location.state === null ? 1 : location.state.designReqId; // TODO 추후 지울 것

        getDesiginReqDetail(designReqId);
    }, []);

    //method
    const getDesiginReqDetail = async (degisnReqId: number) => {
        const data = await getDesignReqDetail(degisnReqId);
        setDetail(data);
    };

    console.log("detail : ", detail);
    if (detail && detail.reqDetailResResources) {
        console.log(
            "detail.res length : ",
            detail.reqDetailResResources.length
        );
    }
    return (
        <Wrap>
            <ContentWrap>
                <DesignReqDetailCount
                    viewCnt={detail?.viewCnt}
                    scrabCnt={detail?.scrabCnt}
                    commentCnt={
                        detail && detail.reqDetailResResources
                            ? detail.reqDetailResResources.length
                            : 0
                    }
                />
                <Button>제안하기</Button>
            </ContentWrap>
            <ContentWrap>
                <DesignReqDetailUser />
                <DesignReqDetailSubInfo />
            </ContentWrap>
            <DesignReqInfoContent
                sizeNm={detail?.sizeNm}
                mainColor={detail?.mainColor}
                subColor={detail?.subColor}
                housingType={detail?.housingTypeNm}
                dueDate={detail?.dueDate}
                maxPrice={detail?.maxPrice}
            />
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
