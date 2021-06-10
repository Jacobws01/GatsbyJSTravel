import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import { ImLocation } from 'react-icons/im'

const Trips = ({ heading }) => {
const data = useStaticQuery(graphql`
	query TripsQuery {
  allTripsJson {
    edges {
      node {
        alt
        button
        name
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`)

function getTrips(data) {
	const tripsArray = []
	data.allTripsJson.edges.forEach((item, index) => {
		tripsArray.push(
			<ItemCard key={index}>
				<ItemImg
					alt={item.node.alt}
					fluid={item.node.img.childImageSharp.fluid} 
				/>
				<ItemInfo>
					<TextWrap>
						<ImLocation />
						<ItemTitle>{item.node.name}</ItemTitle>
					</TextWrap>
					<Button to="/" primary="true" round="true" 
						css={`
								position: absolute;
								top: 420px;
								font-size: 14px
							`}>
						{item.node.button}
					</Button>
				</ItemInfo>
			</ItemCard>
		)
	})
	return tripsArray
}

	return (
		<ItemContainer>
			<ItemHeading>{heading}</ItemHeading>
			<ItemWrapper>{getTrips(data)}</ItemWrapper>
		</ItemContainer>
	)
}

export default Trips

const ItemContainer = styled.div`
	min-height: 100vh;
	padding: 5rem calc((100vw - 1400px) / 2);
	color: #fff;
`

const ItemHeading = styled.div`
	font-size: clamp(1.2rem, 5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color: #000;
`

const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	justify-items: center;
	padding: 0 2rem;

	 @media screen and (max-width: 1200px) {
	 	grid-template-columns: 1fr 1fr;
	 }

	 @media screen and (max-width: 868px) {
	 	grid-template-columns: 1fr;
	 }
`

const ItemCard = styled.div`
	line-height: 2;
	width: 100%;
	height: 500px;
	position: relative;
	border-radius: 10px;
	transition: 0.2s ease;
`

const ItemImg = styled(Img)`
	height: 100%;
	max-width: 100%;
	position: relative;
	border-radius: 10px;
	filter: brightness(70%);
	transition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

	&:hover {
		filter: brightness(100%);
	}
`

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 2rem;

	 @media screen and (max-width: 800px) {
	 	padding: 0 1rem;
	 }
`

const TextWrap = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 375px;
`

const ItemTitle = styled.div`
	font-weight: 400;
	font-size: 1rem;
	margin-left: 0.5rem;
`