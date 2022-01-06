import React, { ReactChildren, ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonProps } from './interface'

const StyledButton = styled.button`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding: 0.5rem 1rem;

	/* 크기 */
	height: 2.25rem;
	font-size: 1rem;

	/* 색상 */
	background: #228be6;
	&:hover {
		background: #339af0;
	}
	&:active {
		background: #1c7ed6;
	}

	/* 기타 */
	& + & {
		margin-left: 1rem;
	}
`

const Button = function ({ children, ...rest }: ButtonProps) {
	return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button