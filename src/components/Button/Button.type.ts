export type sizeTypes = 'small' | 'medium' | 'large'
export type backgroundColor = 'blue' | 'green' | 'red'

export interface ButtonStyleProps {
  size ?: sizeTypes
  color ?: backgroundColor
} 

export interface ButtonProps extends ButtonStyleProps {
  label?: string
}