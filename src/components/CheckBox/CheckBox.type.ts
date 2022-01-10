export interface CheckBoxStyleProps {
  theme : 'black' | 'blue' | 'green',
  scale : number
}

export interface CheckBoxProps extends CheckBoxStyleProps {
  className ?: string
  checked ?: boolean
}