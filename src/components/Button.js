import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`

	background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};


	background: ${({ primary }) => (primary ? '#172A36' : '#077BF1')};

	background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};

	white-space: nowrap;
	padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
	color: #fff;
	font-size: ${({ big }) => (big ? '20px' : '16px')};
	outline: none;
	border: none;
	min-width: 100px;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s !important;
	border-radius: ${({ round }) => (round ? '50px' : 'none')};
	&:hover {
		background: ${({ primary }) => (primary ? '#F26A2E' : '#F26A2E')};

		background: ${({ primary }) => (primary ? '#005993' : '#F26A2E')};
		color: #fff;
		box-shadow: 0px 0px 
#005993;

		background: ${({ primary }) => (primary ? '#F26A2E' : '#F26A2E')};

		transform: translateY(-2px);
	}
`