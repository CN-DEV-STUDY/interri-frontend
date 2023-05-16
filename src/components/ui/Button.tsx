import styled from 'styled-components';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	bgColor?: string;
	color?: string;

	// 버튼 크기
	sm?: boolean; // small

	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
}

/**
 * @description 버튼 컴포넌트
 */
const Button = ({
	type = 'button',
	bgColor,
	color,
	sm,
	onClick,
	children,
}: ButtonProps) => {
	// view
	return (
		<StyledButton type={type} sm={sm} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;

// STYLED COMPONENTS
const StyledButton = styled.button<ButtonProps>`
	border: none;
	border-radius: 5px;
	background-color: #1D2133;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 48px;

	cursor: pointer;
	:hover {
		background-color: #979797;
	}

	${(props) => props.sm && `padding: 10px 12px;`};
`;
