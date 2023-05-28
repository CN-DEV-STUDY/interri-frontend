import DesignReqDetailCount from "@/components/designReq/DesignReqDetailCount";
import DesignReqDetailSubInfo from "@/components/designReq/DesignReqDetailSubInfo";
import DesignReqDetailUser from "@/components/designReq/DesignReqDetailUser";
import DesignReqInfoContent from "@/components/designReq/DesignReqInfoContent";
import styled from "styled-components";

/**
 * @description 디자인 요청 상세 컴포넌트
 */
function DesignRequestDetail() {
    return (
        <Wrap>
            <ContentWrap>
                <DesignReqDetailCount />
                <Button>제안하기</Button>
            </ContentWrap>
            <ContentWrap>
                <DesignReqDetailUser />
                <DesignReqDetailSubInfo />
            </ContentWrap>
            <DesignReqInfoContent />
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
