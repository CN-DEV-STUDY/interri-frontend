import styled from 'styled-components';

interface ButtonProps {
	type?: string;
	bgColor?: string;
	color?: string;
	children: React.ReactNode;
}

/**
 * @description 버튼 컴포넌트
 */
const Button = ({ type = 'button', bgColor, color, children }: ButtonProps) => {
	// view
	return <StyledButton>{children}</StyledButton>;
};

export default Button;

// STYLED COMPONENTS
const StyledButton = styled.button`
	border: none;
	border-radius: 5px;
	background-color: #b5b3b4;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 48px;
	flex-grow: 1;
`;
