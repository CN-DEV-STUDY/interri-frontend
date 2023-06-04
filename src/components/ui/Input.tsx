import React from 'react'
import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

interface InputProps {
	value?: string | number | undefined
	onChange?: ChangeEventHandler
	type?: string
	name?: string
	placeholder?: string
	maxLength?: number
	readOnly?: boolean
	// inputRef?: any
	autoComplete?: string
	multiply?: boolean
	display?: string
	width?: number
	hasError?: boolean
	ref?: any
}

/**
 * @description Input 컴포넌트
 */
const Input = React.forwardRef(
	(
		{
			value,
			onChange,
			type,
			name,
			placeholder,
			maxLength,
			readOnly,
			// inputRef,
			autoComplete = 'off',
			multiply,
			display,
			width,
			hasError,
		}: InputProps,
		ref
	) => {
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
				ref={ref}
				autoComplete={autoComplete}
				display={display}
				multiple={multiply}
				width={width}
				hasError={hasError}
			/>
		)
	}
)

export default Input

// STYLED COMPONENT
const StyledInput = styled.input<InputProps>`
	width: ${(props) => (props.width ? props.width : 300)}px;
	height: 50px;
	border-radius: 9px;
	border: 1px solid ${(props) => (props.hasError ? 'red' : '#96a6cc')};
	::placeholder {
		color: ${(props) => (props.hasError ? 'red' : '#96a6cc')};
	}
	:focus::placeholder {
		color: #96a6cc;
	}
	padding: 18px;

	${(props) => props.display === 'none' && `display: none;`}
`
