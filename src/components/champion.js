import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video1 from '../assets/videos/backgroundvideo1.mp4'


const Champion = () => {
	return (
		<ChampionContainer>
			<ChampBg>
				<VideoBg loading="eager" src={Video1} type="video/mp4"
				autoPlay loop muted playsInline />
			</ChampBg>
			<ChampContent>
				<ChampItems>
					<ChampH1>Unreal Destinations</ChampH1>
					<ChampP>Out of this world</ChampP>
					<Button primary="true" big="true" round="true" to="/">
						Travel Now
					</Button>
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
const VideoBg = styled.video`
	width: 100%
	height: 100%
	-o-object-fit: cover;
	object-fit: cover;
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
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	padding: 0 1rem;
`
const ChampP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 400;
`