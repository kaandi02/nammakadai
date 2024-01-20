import styled from 'styled-components'
import {Facebook,Twitter,Instagram,Room,Phone,Mail} from '@mui/icons-material'
import {mobile,mmobile,pc,ld} from '../responsive'

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
	display:flex;
	${mobile({
		flexDirection:"column"
	})}
`
const Left=styled.div`
	display:flex;
	flex:1;
	flex-direction:column;
	padding:20px;
`
const Logo=styled.h1`
	${mobile({
		fontSize:"20px"
	})}
	${mmobile({
		fontSize:"20px"
	})}
	${pc({
		fontSize:"24px"
	})}
	${ld({
		fontSize:"28px"
	})}
`
const Description=styled.p`
	margin:20px 0px;
	${mobile({
		fontSize:"12px"
	})}
	${mmobile({
		fontSize:"10px",
		margin:"10px 0px"
	})}
	${pc({
		fontSize:"14px",
		margin:"10px 0px"
	})}
	${ld({
		fontSize:"16px",
	})}
`
const SocialContainer=styled.div`
	display:flex;
`
const SocialIcon=styled.div`
	width:40px;
	height:40px;
	border-radius:50%;
	color:white;
	background-color:#${props=>props.color};
	display:flex;
	align-items:center;
	justify-content:center;
	margin-left:10px;
	cursor:pointer;
	${mobile({
		marginRight:"10px",
		marginLeft:"0px"
	})}
	${pc({
		marginRight:"10px",
		marginLeft:"0px"
	})}
`
const Center=styled.div`
	flex:1;
	padding:20px;
	${mobile({
		display:"none"
	})}
`
const Title=styled.h3`
	margin-bottom:30px;
	${mobile({
		marginBottom:"10px"
	})}
	${mmobile({
		marginBottom:"10px"
	})}
	${pc({
		marginBottom:"10px"
	})}
`
const List=styled.ul`
	margin:0;
	padding:0;
	list-style:none;
	display:flex;
	flex-wrap:wrap;
	${mmobile({
		fontSize:"12px"
	})}
	${pc({
		fontSize:"15px"
	})}
`
const ListItem=styled.li`
	width:50%;
	margin-bottom:10px;
`
const Right=styled.div`
	flex:1;
	padding:20px;
`
const ContactItem=styled.div`
	margin-bottom:10px;
	display:flex;
	align-items:center;
	${mobile({
		marginBottom:"5px"
	})}
	${mmobile({
		marginBottom:"5px"
	})}
`
const Payment=styled.img`
	width:60%;
	${mobile({
		marginTop:"10px"
	})}
	${mmobile({
		width:"70%",
		marginTop:"10px"
	})}
	${ld({
		width:"80%"
	})}
`

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>NAMMAKADAI.</Logo>
				<Description>Online shopping with Nammakadai is very easy as you get to shop from the comfort of your home and get products delivered at your doorstep. You can effortlessly browse our massive collection from multiple categories.</Description>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>My Orders</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>T&C</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem><Room style={{marginRight:"10px"}} />Kovilpatti</ContactItem>
				<ContactItem><Phone style={{marginRight:"10px"}} />+91 9876543210</ContactItem>
				<ContactItem><Mail style={{marginRight:"10px"}} />webuilder.web.app@gmail.com</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	)
}

export default Footer
