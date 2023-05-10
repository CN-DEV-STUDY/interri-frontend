import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface CustomLinkProps {
	to: string;
	children: React.ReactNode;
}

const CustomLink = ({ to, children }: CustomLinkProps) => {
	return <StyledCustomLink to={to}>{children}</StyledCustomLink>;
};

export default CustomLink;

// STYLED COMPONENTS
const StyledCustomLink = styled(Link)`
	display: inline-block;

	padding: 0 16px;
	font-size: 20px;

	:link,
	:visited {
		text-decoration: none;
	}

	:hover,
	:active {
	}
`;
