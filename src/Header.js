import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Container>
			<HeaderLogo>
				<img src={'https://i.imgur.com/7I9Was5.png'} />
			</HeaderLogo>
			<HeaderOptionAddress>
				<LocationOnIcon />
				<HeaderOption>
					<OptionLineOne>Hello,</OptionLineOne>
					<OptionLineTwo>Select your address</OptionLineTwo>
				</HeaderOption>
			</HeaderOptionAddress>

			<HeaderSearch>
				<HeaderSearchInput type='text' />
				<HeaderSearchIconContainer>
					<SearchIcon />
				</HeaderSearchIconContainer>
			</HeaderSearch>

			<HeaderNavItems>
				<HeaderOption>
					<OptionLineOne>Hello, Danielle</OptionLineOne>
					<OptionLineTwo>Account & Lists</OptionLineTwo>
				</HeaderOption>

				<HeaderOption>
					<OptionLineOne>Returns</OptionLineOne>
					<OptionLineTwo>& Orders</OptionLineTwo>
				</HeaderOption>

				<HeaderOptionCart>
					<Link to='/cart'>
						<AddShoppingCartIcon />
						<CartCount>5</CartCount>
					</Link>
				</HeaderOptionCart>
			</HeaderNavItems>
		</Container>
	)
}

export default Header

const Container = styled.div`
	height: 60px;
	background-color: #0f1111;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
`

const HeaderLogo = styled.div`
	img {
		width: 100px;
		margin-left: 11px;
	}
`

const HeaderOptionAddress = styled.div`
	padding-left: 9px;
	display: flex;
	align-items: center;
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
	font-weight: bold;
`

const HeaderSearch = styled.div`
	display: flex;
	flex-grow: 1;
	height: 40px;
	border-radius: 4px;
	overflow: hidden;
	margin-left: 4px;
	background-color: white;

	// adds orange glow box shadow when search input is clicked
	:focus-within {
		box-shadow: 0 0 0 3px #f90;
	}
`

const HeaderSearchInput = styled.input`
	flex-grow: 1;
	border: 0;

	// gets rid of blue outline when search input is clicked
	:focus {
		outline: none;
	}
`

const HeaderSearchIconContainer = styled.div`
	background-color: #febd69;
	width: 45px;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`
const HeaderNavItems = styled.div`
	display: flex;
`

const HeaderOption = styled.div`
	// TROUBLE - Top, Right, Bottom, Left
	padding: 10px 9px 9px 9px;
`

const HeaderOptionCart = styled.div`
	display: flex;

	// a tag is a link tag and has odd default color (purple) and text-decoration values (underline) which is why I am hard coding here.

	a {
		display: flex;
		align-items: center;
		padding-right: 9px;
		color: white;
		text-decoration: none;
	}
`

const CartCount = styled.div`
	padding-left: 4px;
`
