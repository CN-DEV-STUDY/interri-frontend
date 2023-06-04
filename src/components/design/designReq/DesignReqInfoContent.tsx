import styled from "styled-components";

interface GridItemProps {
  mt?: number;
  size?: number;
}

function DesignReqInfoContent() {
  return (
    <Grid>
      <GridTextItem size={44} mt={150}>
        안방
      </GridTextItem>
      <GridImgItem src={process.env.PUBLIC_URL + "/images/design-req1.jpg"} />
      <GridTextItem size={24}>
        현관을 들어서는 순간 눈앞에 펼쳐진 멋진 바다뷰!! 플로리스트의 예쁜
        꽃들이 함께하는 힐링공간!!!아침에 눈뜨면 햇살가득한 오션 테라스가 상쾌한
        아침을 맞아주는 마법같은 뷰 맛집 ! (사진에 대한 설명)
      </GridTextItem>
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
