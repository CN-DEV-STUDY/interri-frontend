import styled from 'styled-components';

interface ImageProps {
	path: string;
	height: number;
	width: number;
}

/**
 * @description 이미지 컴포넌트
 */
const Image = ({ path, width, height }: ImageProps) => {
	// view
	return <StyledImg src={path} height={height} width={width}/>;
};

export default Image;

// STYLED COMPONENTS
const StyledImg = styled.img`
	height: ${(props) => props.height}rem;
	width: ${(props) => props.width}rem;
	border-radius: 9px;
`;
