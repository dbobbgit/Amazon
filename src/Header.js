import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<Container>
			<HeaderLogo>
				<img src={'https://i.imgur.com/7I9Was5.png'} />
			</HeaderLogo>
			<HeaderOptionAddress>
				<OptionLineOne>Hello,</OptionLineOne>
				<OptionLineTwo>Select your address</OptionLineTwo>
			</HeaderOptionAddress>
		</Container>
	)
}

export default Header

const Container = styled.div`
	height: 60px;
	background-color: #0f1111;
	display: flex;
	align-items: center;
	// justify-content: center;
`

const HeaderLogo = styled.div`
	img {
		width: 100px;
		margin-left: 11px;
	}
`

const HeaderOptionAddress = styled.div``

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div``
