import styled from "styled-components";
import Image from "@/components/ui/Image";
import DesignCardInfo from "@/components/common/card/DesignCardInfo";

interface DesignCardProps {
  userId: string;
  viewCount?: number;
}

interface CardImageProps {
  url: string;
}

/**
 * @description DesignCard 컴포넌트
 */
const DesignCard = ({ userId, viewCount }: DesignCardProps) => {
  // view
  return (
    <CardContainer url={process.env.PUBLIC_URL + "/images/design-req1.jpg"}>
      <DesignCardInfo userId={userId} viewCount={viewCount} />
    </CardContainer>
  );
};

export default DesignCard;

// STYLED COMPONENTS
const CardContainer = styled.div<CardImageProps>`
  position: relative;

  flex-shrink: 0;
  width: 31rem;
  height: 36rem;
  border-radius: 9px;
  margin-bottom: 20px;

  background-image: url(${(props) => props.url});
  background-size: cover;
  box-shadow: 0px 8px 12px rgba(73, 84, 128, 0.5);
`;
