import DesignCard from "@/components/common/card/DesignCard";
import DesignCardList from "@/components/common/card/DesignCardList";
import styled from "styled-components";

interface TextProps {
  size?: number;
  weight?: number | string;
  decoration?: string;
}

function DesignReqResList() {
  return (
    <Wrap>
      <ContentWrap>
        <Text size={36} weight={"bold"}>
          제안 요청
        </Text>
        <SortType>
          <Text size={24} decoration={"underline"}>
            최신순
          </Text>
          <Text size={24}>|</Text>
          <Text size={24} decoration={"underline"}>
            가격순
          </Text>
        </SortType>
      </ContentWrap>

      <Grid>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
        <ResCardItem>
          <ResProfileWrap>
            <ProfileImg />
            <Text size={24}>인테리어 티쳐</Text>
          </ResProfileWrap>
          <DesignCard userId={""} />
        </ResCardItem>
      </Grid>
    </Wrap>
  );
}

export default DesignReqResList;

const Wrap = styled.div`
  margin-top: 150px;
  padding-top: 50px;
  border-top: 1px solid #bfbfbf;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortType = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.div<TextProps>`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  text-decoration: ${(props) => props.decoration};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 310px 310px 310px 310px 310px 310px;
  gap: 30px;
`;

const ResCardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ResProfileWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: skyblue;
`;
