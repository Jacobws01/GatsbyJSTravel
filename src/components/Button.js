import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
	background: ${({ primary }) => (primary ? '#172A36' : '#077BF1')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
	color: #fff;
	font-size: ${({ big }) => (big ? '20px' : '16px')};
	outline: none;
	border-color: 
#172A36!important;
    border: 3px solid #fff;
    box-shadow: 3px 3px 
#005993;
	min-width: 100px;
	cursor: pointer;
	text-decoration: none;
	margin-left: 18px;
	margin-right: 18px;
	transition: 0.3s !important;
	border-radius: ${({ round }) => (round ? '0px' : 'none')};
	overflow: hidden;
	-webkit-transition: border-color 0.3s, color 0.3s;
	transition: border-color 0.3s, color 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

	&:hover {
		background: ${({ primary }) => (primary ? '#005993' : '#F26A2E')};
		color: #fff;
		box-shadow: 0px 0px 
#005993;
		transform: translateY(-2px);
	}

`