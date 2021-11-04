import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {mobile,mmobile,pc,ld} from '../responsive.js';

const Container=styled.div`
	height:60px;
	font-family:"Urbanist",sans-serif;
	${mobile({
		height:"50px",
	})}
	${ld({
		height:"60px",
	})}
`
const Wrapper=styled.div`
	padding:10px 20px;
	display:flex;
	justify-content:space-between;
	${mobile({
		padding:"10px 0px",
		justifyContent:"center"
	})}
	${pc({
		padding:"10px 10px",
		justifyContent:"center"
	})}
`
const Left=styled.div`
	display:flex;
	align-items:center;
	flex:1;
	${mobile({
		flex:0.2
	})}
	${mmobile({
		flex:0.2
	})}
`
const Language=styled.span`
	font-size:14px;
	cursor:pointer;
	${mobile({
		display:"none"
	})}
	${mmobile({
		display:"none"
	})}
	${pc({
		marginLeft:"10px"
	})}
`
const SearchContainer=styled.div`
	display:flex;
	align-items:center;
	border:0.5px solid gray;
	margin-left:25px;
	padding:5px;
	${mobile({
		marginLeft:"5px",
		display:"none"
	})}
	${mmobile({
		marginLeft:"0px",
		marginRight:"10px",
	})}
	${pc({
		marginLeft:"20px"
	})}
`
const Input=styled.input`
	border:none;
	outline:none;
	${mobile({
		width:"50px",
	})}
	${mmobile({
		width:"120px",
	})}
`
const Center=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	flex:1;
`
const Logo=styled.h1`
	font-weight:bolder;
	text-align:center;
	${mobile({
		fontSize:"18px"
	})}
	${mmobile({
		fontSize:"28px"
	})}
`
const Right=styled.div`
	display:flex;
	align-items:center;
	justify-content:flex-end;
	flex:1;
	${mobile({
		flex:3,
		justifyContent:"center"
	})}
	${mmobile({
		flex:0.8,
		justifyContent:"center"
	})}
	${pc({
		marginRight:"5px"
	})}
`
const MenuItem=styled.div`
	font-size:14px;
	cursor:pointer;
	margin-left:25px;
	${mobile({
		fontSize:"12px",
		marginLeft:"20px"
	})}
	${mmobile({
		fontSize:"12px",
		marginLeft:"10px",
		marginRight:"10px"
	})}
`

const Navbar = () => {
	const quantity=useSelector(state=>state.cart.quantity);
	return (
			<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<SearchRoundedIcon style={{color:"gray",fontSize:"18"}} />
					</SearchContainer>
				</Left>
				<Center><Link to='/' style={{"textDeacoration":"none","color":"black"}}><Logo>NAMMAKADAI.</Logo></Link></Center>
				<Right>
					<Link to="/register" style={{"textDecoration":"none","color":"black"}}>
						<MenuItem>
							REGISTER
						</MenuItem>
					</Link>
					<Link to="/login" style={{"textDecoration":"none","color":"black"}}>
						<MenuItem>
							SIGN IN
						</MenuItem>
					</Link>
					<Link to="/cart" style={{"textDecoration":"none","color":"black"}}>
						<MenuItem>
						<Badge badgeContent={quantity} color="primary">
							<ShoppingCart />
						</Badge>
					</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar