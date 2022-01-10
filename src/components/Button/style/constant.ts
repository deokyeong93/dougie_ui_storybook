import { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const sizes = {
	large: {
		height: '4rem',
		fontSize: '2rem',
		padding: '1rem 4rem'
	},
	medium: {
		height: '2.25rem',
		fontSize: '1rem',
		padding : '0.5rem 2rem'
	},
	small: {
		height: '1.15rem',
		fontSize: '0.5rem',
		padding: '0.25rem 1em'
	},
}

export const backgroundStyles = {
	green: css`
		background-color: green;
		&:hover {
			background-color: ${lighten(0.1, 'green')};
		}
		&:active {
			background-color: ${darken(0.1, 'green')};
		}
	`,
	red: css`
		background-color: red;
		&:hover {
			background-color: ${lighten(0.1, 'red')};
		}
		&:active {
			background-color: ${darken(0.1, 'red')};
		}
	`,
	blue: css`
		background-color: blue;
		&:hover {
			background-color: ${lighten(0.1, 'blue')};
		}
		&:active {
			background-color: ${darken(0.1, 'blue')};
		}
	`,
}
