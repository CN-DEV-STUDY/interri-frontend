import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface TextareaProps {
	placeholder: string;
	onChange: ChangeEventHandler;
}

const Textarea = ({ placeholder, onChange }: TextareaProps) => {
	return <StyledTextarea placeholder={placeholder} onChange={onChange} />;
};

export default Textarea;

// STYLED COMPONENTS
const StyledTextarea = styled.textarea`
	border-radius: 9px;
	padding: 10px 20px;
`;
