import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image12 from '../assets/images/heyyyy.jpg'
import Wetravellogo from '../assets/images/heyyy113.png'


const Champion = () => {
	return (
		<ChampionContainer>
			<ChampBg> 
			</ChampBg>
			<ChampContent>

				<ChampItems>
					<ChampH1>Welcome to the BCFED 60TH Convention Accommodation site</ChampH1>
					<ChampP>Book your hotel room at the special union rates, available here on an exclusive basis.
					 Hotel rates are available from November 21-25,2022</ChampP>
					<Button primary="true" big="true" round="true" to="https://wetravel.eventsair.com/bc-federation-of-labour-convention/bcfed-60">
						Union Hotels
					</Button>
					<Champlogo />
				</ChampItems>
			</ChampContent>
		</ChampionContainer>
	)
}

export default Champion

const ChampionContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;
	color: #fff;
	:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
		background: linear-gradient(
			180deg, 
			rgba(0, 0, 0, 0.1) 0%, 
			rgba(0, 0, 0, 0.3) 100%
		  ),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
	}
`
const ChampBg = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: linear-gradient(
		 180deg,
		 rgba(0, 0, 0, 0.3) 0%,
		 rgba(0, 0, 0, 0.4) 33%,
		 rgba(0, 0, 0, 0.5) 63%
		),
		url(${Image12}) no-repeat center;
`

const Champlogo = styled.div`
	background: 
		url(${Wetravellogo}) no-repeat center;
		width: 500px;
		z-index: -1;
		height: 500px;
	position: absolute;
	margin-right: 9px;
	bottom: 4px;
	align-items: center;
	filter: brightness(1.5);

	@media screen and (max-width: 1200px) {
  	display: none;

  	@media screen and (max-height: 900px) {
  	display: none;
`

const ChampContent = styled.div`
	z-index: 3;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);
`
const ChampItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	max-height: 100%;
	padding: 0;
	color: #fff;
	line-hieght: 1.1;
	font-weight: bold;
`
const ChampH1 = styled.h1`
	font-size: clamp(1.5rem, 4vw, 2.25rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	padding: 0 1rem;
`
const ChampP = styled.p`
	font-size: clamp(.75rem, 3vw, 1.5rem);
	margin-bottom: 2rem;
	font-weight: 400;
`