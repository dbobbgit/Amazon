import React from 'react'
import styled from 'styled-components'

function Home() {
	return (
		<Container>
			<Banner></Banner>
			<Content></Content>
		</Container>
	)
}

export default Home

const Container = styled.div``

const Banner = styled.div`
	background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/TV/INVI_S1_023344_GWBleedingHero_3000x1200_POST_Final_noLocale_PVD6895_V2._CB656509356_.jpg');
	min-height: 600px;
	background-position: center;
	background-size: cover;
	// adds gradient top to bottom, from fully black to white with opacity
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div``
