import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface TextareaProps {
	placeholder: string;
	onChange: ChangeEventHandler;
}

const Textarea = ({ placeholder }: TextareaProps) => {
	return <StyledTextarea placeholder={placeholder} />;
};

export default Textarea;

// STYLED COMPONENTS
const StyledTextarea = styled.textarea``;
