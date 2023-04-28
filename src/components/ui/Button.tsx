import styled from 'styled-components';

interface ButtonProps {
	text: string;
	type?: string;
	bgColor?: string;
	color?: string;
}

/**
 * @description 버튼 컴포넌트
 */
const Button = ({ text, type = 'button', bgColor, color }: ButtonProps) => {
	// view
	return <StyledButton>{text}</StyledButton>;
};

export default Button;

// STYLED COMPONENTS
const StyledButton = styled.button`
	border: none;
	border-radius: 9px;
	background-color: #b5b3b4;
	color: #fff;
	padding: 8px 16px;
	margin-right: 5px;
	flex-grow: 1;
`;
