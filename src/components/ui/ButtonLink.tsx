import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonLink {
    to: string
    children: React.ReactNode;
}

const ButtonLink = ({to, children}: ButtonLink) => {
    return ( <StyledButtonLink to={to}>{children}</StyledButtonLink> );
}
 
export default ButtonLink;

// STYLED COMPONENTS
const StyledButtonLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #1D2133;
    color: #fff;
    width: 140px;
    height: 45px;
    border-radius: 9px;

    font-weight: 600;
    font-size: 20px;
    
	:link,
	:visited {
		text-decoration: none;
	}

	:hover,
	:active {
        background-color: #fff;
        color: #1D2133;
        border: 2px solid #1D2133;
	}
`;
