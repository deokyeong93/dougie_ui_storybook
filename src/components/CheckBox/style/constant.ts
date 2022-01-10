import { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const checkBoxThemeObj = {
	black: {
		stroke: css`
			stroke: white;
		`,
		boxBackGround: {
			nonActive: css`
				background: white;
			`,
			active: css`
				background: ${lighten(0.1, 'black')};
			`,
		},
	},
	green: {
		stroke: css`
			stroke: white;
		`,
		boxBackGround: {
			nonActive: css`
				background: white;
			`,
			active: css`
				background: ${lighten(0.1, 'green')};
			`,
		},
	}
		blue: {
			stroke: css`
				stroke: white;
			`,
			boxBackGround: {
				nonActive: css`
					background: white;
				`,
				active: css`
					background: ${lighten(0.1, 'blue')};
				`,
			},
	},
}