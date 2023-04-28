import styled from 'styled-components';

interface ImageProps {
	path: string;
	width?: number;
	height: number;
}

/**
 * @description 이미지 컴포넌트
 */
const Image = ({ path, width, height }: ImageProps) => {
	// view
	return <StyledImg src={path} height={height} />;
};

export default Image;

// STYLED COMPONENTS
const StyledImg = styled.img`
	height: ${(props) => props.height}rem;
	object-fit: cover;
`;
