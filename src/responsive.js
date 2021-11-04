import {css} from 'styled-components'

export const mobile=(props)=>{
	return css `
		@media only screen and (max-width:600px){
			${props}
		}
	`
}
export const mmobile=(props)=>{
	return css`
		@media only screen and (min-width:601px) and (max-width: 768px) {
			${props}
		}
	`
}
export const pc=(props)=>{
	return css`
		@media only screen and (min-width:769px) and (max-width: 992px) {
			${props}
		}
	`
} 
export const ld=(props)=>{
	return css`
		@media only screen and (min-width:993px) and (max-width: 1200px) {
  			${props}
  		}
	`
}