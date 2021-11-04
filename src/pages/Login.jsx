import styled from 'styled-components';
import {mobile,mmobile} from '../responsive';

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
	height:100vh;
	background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200');
	background-position: center;
  	background-repeat: no-repeat;
  	background-size: cover;
  	display:flex;
  	align-items:center;
  	justify-content:center;
`
const Wrapper=styled.div`
	width:25%;
	padding:30px;
	background-color:white;
	${mobile({
		width:"75%",
	})}
	${mmobile({
		width:"35%",
	})}
`
const Title=styled.h1`
	text-align:center;
	font-size:20px;
	font-weight:600;
	letter-spacing:2px;
	${mmobile({
		fontSize:"16px",
	})}
`
const Form=styled.form`
	display:flex;
	flex-direction:column;
	${mmobile({
		alignItems:"center",
		justifyContent:"center"
	})}
`
const Input=styled.input`
	font-family:'Montserrat',sans-serif;
	font-size:14px;
	flex:1;
	min-width:40%;
	margin:10px 0px;
	padding:10px;
	outline:none;
	${mmobile({
		width:"85%",
		fontSize:"12px",
	})}
`
const Button=styled.button`
	font-family:'Urbanist',sans-serif;
	letter-spacing:2px;
	border:none;
	margin:10px 0px;
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
const Link=styled.a`
	margin:5px 0px;
	font-size:12px;
	text-decoration:underline;
	cursor:pointer;
`

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="Username" />
					<Input type="password" placeholder="Password" />
					<Button>LOGIN</Button>
					<Link>FORGOT PASSWORD ?</Link>
					<Link>CREATE NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Login