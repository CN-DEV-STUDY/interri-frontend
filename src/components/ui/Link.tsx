import styled from 'styled-components';

interface LinkProps {
	to: string;
	children: React.ReactNode;
}

/**
 * @description a태그 컴포넌트
 */
const Link: React.FC<LinkProps> = ({ to, children }) => {
	// view
	return <StyledLink href={to}>{children}</StyledLink>;
};

export default Link;

// STYLED COMPONENTS
const StyledLink = styled.a`
	text-decoration: none;
	color: #fff;
`;
