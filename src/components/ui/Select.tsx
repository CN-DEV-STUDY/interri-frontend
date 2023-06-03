import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface SelectProps {
  onChange: ChangeEventHandler;
  children: React.ReactNode;
  width?: number;
}

const Select = ({ children }: SelectProps) => {
  return <StyledSelect>{children}</StyledSelect>;
};

export default Select;

// STYLED COMPONENTS
const StyledSelect = styled.select`
  font-size: 1.8rem;
  padding-left: 12px;
  width: 300px;
  height: 50px;
`;
