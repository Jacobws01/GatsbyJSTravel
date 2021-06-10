import React from 'react'
import styled from 'styled-components'
import { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

const StatsData = [
	{
		icon: (<GiEarthAmerica css={`
			color: #047bf1;
			`}
			/>),
		title: "Travel to over ",
		desc: 22,
		bottom: "Countries"
	},
	{
		icon: (<MdAirplanemodeActive css={`
			color: #f3a82e;
			`}
			/>),
		title: "Choose from over ",
		desc: 120,
		bottom: "Flights"
	},
	{
		icon: (<MdTimer css={`
			color: #f34f2e;
			`}
			/>),
		title: "Travel at any time ",
		desc: 365,
		bottom: "Days per year"
	},
	{
		icon: (<FaMoneyCheck css={`
			color: #3af576;
			`}
			/>),
		title: "Over ",
		desc: 12,
		bottom: "Payment methods"
	},
]

const Stats = () => {
	const [focus, setFocus] = React.useState(false);
	return (
			<StatsContainer>
				<Heading>Hello</Heading>
				<Wrapper>{StatsData.map((item, index) => {
					return (
						<StatsBox key={index}>
							<Icon>{item.icon}</Icon>
							<Title>{item.title} 
							<CountUp start={focus ? 0 : null} end={item.desc} duration={6} redraw={true}>
                                            {({ countUpRef }) => (
                                                <Fragment>
                                                    <span ref={countUpRef} />
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true);
                                                            }
                                                        }}
                                                    >
                                                        <span>+</span>
                                                    </VisibilitySensor>
                                                </Fragment>
                                            )}
                                        </CountUp>
                                        </Title>
                                        <Description>{item.bottom}</Description>
						</StatsBox>
						)
				})}
						</Wrapper>
			</StatsContainer>
	)
}

export default Stats

const StatsContainer = styled.div`
	width: 100%;
	background: #fff;
	color: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem calc((100vw - 1300px) /2);
`

const Heading = styled.h1`
	text-align: start;
	font-size: clamp(1.5rem, 5vw, 2rem);
	margin-bottom: 3rem;
	padding: 0 2rem;
`

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grip-gap: 10px;

	 @media screen and (max-width: 768px) {
	 	grid-template-columns: 1fr;
	 }

	 @media screen and (max-width: 500px) {
	 	grid-template-columns: 1fr;
	 }
`

const StatsBox = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
`

const Icon = styled.div`
	font-size: 3rem;
	margin-bottom: 1rem;
`

const Title = styled.p`
	font-size: clamp(1rem, 2.5vw, 1.5rem);
	margin-bottom: 0.5rem;
`

const Description = styled.p`

`