import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface InputProps {
	value: string | number | undefined;
	onChange?: ChangeEventHandler;
	type?: string;
	name?: string;
	placeholder?: string;
	maxLength?: number;
	readOnly?: boolean;
	inputRef?: any;
	autoComplete?: string;
}

/**
 * @description Input 컴포넌트
 */
const Input = ({
	value,
	onChange,
	type,
	name,
	placeholder,
	maxLength,
	readOnly,
	inputRef,
	autoComplete = 'off',
}: InputProps) => {
	// view
	return (
		<StyledInput
			type={type}
			name={name}
			value={value || ''}
			onChange={onChange}
			placeholder={placeholder}
			maxLength={maxLength}
			readOnly={readOnly}
			ref={inputRef}
			autoComplete={autoComplete}
		/>
	);
};

export default Input;

// STYLED COMPONENT
const StyledInput = styled.input``;
