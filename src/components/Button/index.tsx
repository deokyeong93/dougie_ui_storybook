import React, { ReactChildren, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { ButtonProps, ButtonStyleProps } from './Button.type'
import { backgroundStyles, sizes } from './style/constant'

const sizeStyle = ({ size }: ButtonStyleProps) => {
	const _size = size || 'medium'

	return css`
		${sizes[_size]}
	`
}

const backgroundStyle = ({ color }: ButtonStyleProps) => {
	const _color = color || 'blue'

	return css`
		${backgroundStyles[_color]}
	`
}

const StyledButton = styled.button<ButtonProps>`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	cursor: pointer;

	/* 크기 */
	${sizeStyle}

	/* 색상 */
	${backgroundStyle}

	/* 기타 */
	&:not(:first-child) {
		margin-left: 1rem;
	}
`

const Button = function ({ label, ...rest }: ButtonProps) {
	return <StyledButton {...rest}>{label}</StyledButton>
}

export default Button
