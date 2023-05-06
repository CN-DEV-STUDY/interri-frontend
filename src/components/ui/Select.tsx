import styled from 'styled-components';

interface SelectProps {
	children: React.ReactNode;
}

const Select = ({ children }: SelectProps) => {
	return <StyledSelect>{children}</StyledSelect>;
};

export default Select;

// STYLED COMPONENTS
const StyledSelect = styled.select``;
