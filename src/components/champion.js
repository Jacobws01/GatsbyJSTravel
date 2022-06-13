import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import finaldesign from '../assets/images/thisisit.jpeg'

const Champion = () => {
	return (
		<ChampionContainer>
			<ChampBg>
			</ChampBg>
			<ChampContent>
				<ChampItems>
					<Champlogo>
					</Champlogo>
					<ChampHere>
						<Button primary="true" big="true" round="true" to="/">
						Learn More
						</Button>
						<Button primary="true" big="true" round="true" to="/">
						Contact Us
						</Button>
					</ChampHere>
				</ChampItems>
			</ChampContent>
		</ChampionContainer>
	)
}

export default Champion

const ChampionContainer = styled.div`
	background: #002535;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;
	color: #000;

	:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
		-webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		-webkit-transform-origin: 0% 100%;
		transform-origin: 0% 100%;
		background: linear-gradient(
			180deg, 
			rgba(0, 0, 0, 0.2) 0%, 
			rgba(0, 0, 0, 0.6) 100%
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

const ChampHere = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-height: 100%;
	padding: 0;
	color: #fff;
	line-hieght: 1.1;
	font-weight: bold;
`

const Champlogo = styled.div`
	background: 
		url(${finaldesign}) no-repeat center;
		width: 500px;
		z-index: -1;
		height: 500px


`
const ChampH1 = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	font-family: 'Oxygen', sans-serif;
	font-weight: 700;
	letter-spacing: 3px;
	padding: 0 1rem;
	color: #005993;
	text-shadow: 1px 2px 
#172A36;
`
const ChampP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 700;
	font-family: 'Oxygen', sans-serif;
	color: #005993;
	text-shadow: 1px 2px 
#172A36;
`