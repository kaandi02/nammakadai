import styled from 'styled-components';
import {mobile,mmobile,pc} from '../responsive'

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
	height:100vh;
	background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
	background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover;
  	display:flex;
  	align-items:center;
  	justify-content:center;
`
const Wrapper=styled.div`
	width:40%;
	padding:30px;
	background-color:white;
	${mobile({
		width:"75%",
	})}
	${mmobile({
		width:"60%",
	})}
	${pc({
		width:"50%",
	})}
`
const Title=styled.h1`
	font-size:20px;
	font-weight:600;
	letter-spacing:2px;
	${mmobile({
		fontSize:"16px",
	})}
`
const Form=styled.form`
	display:flex;
	flex-wrap:wrap;
	${mmobile({
		alignItems:"center",
		justifyContent:"center",
	})}
`
const Input=styled.input`
	font-family:'Montserrat',sans-serif;
	font-size:14px;
	flex:1;
	min-width:40%;
	margin:20px 10px 0px 0px;
	padding:10px;
	outline:none;
	${mmobile({
		fontSize:"12px",
	})}
`
const Agreement=styled.span`
	font-size:14px;
	margin:20px 0px;
`
const Button=styled.button`
	font-family:'Urbanist',sans-serif;
	letter-spacing:2px;
	border:none;
	padding:15px 25px;
	border: 1px solid #1976d2;
	font-size:14px;
	cursor:pointer;
	background-color:white;
	transition:0.4s all ease;

	&:hover{
		background-color:#1976d2;
		color:white;
	}
	${mobile({
		backgroundColor:"#1976d2",
		color:"white"
	})}
	${mmobile({
		width:"80%",
		backgroundColor:"#1976d2",
		color:"white"
	})}
`

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="First Name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input type="password" placeholder="Password" />
					<Input type="password" placeholder="Confirm Password" />
					<Agreement>
						By creating an account, I consent to process my personal data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>REGISTER</Button>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Register