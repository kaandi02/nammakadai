import styled from 'styled-components';
import {Send} from '@mui/icons-material';
import {mobile,mmobile,pc,ld} from '../responsive';

const Container=styled.div`
	font-family:"Urbanist",sans-serif;
	height:60vh;
	background-color:#fcf5f5;
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
`
const Title=styled.h1`
	font-family:"Montserrat",sans-serif;
	font-size:70px;
	margin-bottom:20px;
	${mobile({
		fontSize:"53px"
	})}
	${mmobile({
		fontSize:"45px"
	})}
	${pc({
		fontSize:"53px"
	})}
	${ld({
		fontSize:"60px"
	})}
`
const Description=styled.p`
	font-size:20px;
	font-weight:400;
	margin-bottom:20px;
	${mobile({
		fontSize:"16px"
	})}
	${mmobile({
		fontSize:"14px"
	})}
	${pc({
		fontSize:"16px"
	})}
	${ld({
		fontSize:"18px"
	})}
`
const InputContainer=styled.div`
	width:50%;
	height:40px;
	font-family:"Urbanist",sans-serif;
	background-color:white;
	display:flex;
	justify-content:space-between;
	border:1px solid lightgray;
	font-size:16px;
	${mobile({
		justifyContent:"center",
		width:"90%",
	})}
	${mmobile({
		width:"80%"
	})}
	${pc({
		width:"60%"
	})}
	${ld({
		width:"60%"
	})}
`
const Input=styled.input`
	font-family:"Urbanist",sans-serif;
	border:none;
	outline:none;
	flex:8;
	padding-left:20px;
	font-size:16px;
	${mmobile({
		fontSize:"14px"
	})}
	${pc({
		fontSize:"16px"
	})}
	${ld({
		fontSize:"18px"
	})}
`
const Button=styled.button`
	flex:1;
	border:none;
	outline:none;
	background-color:teal;
	color:white;
`

const NewsLetter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates about offers and products.</Description>
			<InputContainer>
				<Input placeholder="Your Email ID" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	)
}

export default NewsLetter