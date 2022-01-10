import React from 'react'
import styled from 'styled-components'
import { CheckBoxProps, CheckBoxStyleProps } from './CheckBox.type'
import { checkBoxThemeObj } from './style/constant'

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`

const CheckIcon = styled.svg<CheckBoxStyleProps>`
	fill: none;
	${({ theme }: CheckBoxStyleProps) => checkBoxThemeObj[theme].stroke};
	stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`

const StyledCheckbox = styled.div<CheckBoxProps>`
	display: inline-block;
	width: 1rem;
	height: 1rem;
	${({ checked, theme }: CheckBoxProps) =>
		checked
			? checkBoxThemeObj[theme].boxBackGround.active
			: checkBoxThemeObj[theme].boxBackGround.nonActive}
	border-radius: 0.18rem;
	transition: all 150ms;

	${CheckIcon} {
		visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
	}
`

const Checkbox = ({ className, checked, ...props }: CheckBoxProps) => (
	<CheckboxContainer className={className}>
		<HiddenCheckbox checked={checked} {...props} />
		<StyledCheckbox checked={checked}>
			<CheckIcon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12" />
			</CheckIcon>
		</StyledCheckbox>
	</CheckboxContainer>
)

export default Checkbox
