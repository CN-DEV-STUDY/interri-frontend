import styled from 'styled-components';

interface buttonProps {
	text: string;
	type?: string;
	backgroundColor?: string;
	color?: string;
}

/**
 * @description 버튼 컴포넌트
 */
const Button: React.FC<buttonProps> = ({
	text,
	type = 'button',
	backgroundColor,
	color,
}) => {
	// view
	return <StyledButton>{text}</StyledButton>;
};

export default Button;

// STYLED COMPONENTS
const StyledButton = styled.button`
	border: none;
	background-color: blue;
	color: #fff;
`;
