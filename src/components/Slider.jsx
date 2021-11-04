import {useState} from 'react';
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {slideritems} from '../Data/data'
import {mobile,mmobile,pc,ld} from '../responsive';

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
	width:100%;
	height:100vh;
	display:flex;
	background-color:white;
	position:relative;
	overflow:hidden;
	${mobile({
		display:"none"
	})}
`
const Arrow=styled.div`
	width:50px;
	height:50px;
	background-color:#fff7f7;
	display:flex;
	align-items:center;
	justify-content:center;
	border-radius:50%;
	position:absolute;
	top:0;
	bottom:0;
	left:${props=>props.direction==="left" && "10px"};
	right:${props=>props.direction==="right" && "10px"};
	margin:auto;
	cursor:pointer;
	opacity:0.5;
	z-index:2;
`
const Wrapper=styled.div`
	height:100%;
	display:flex;
	transition:all 2s ease;
	transform:translate(${props=>props.SlideIndex * -100}vw);
`
const Slide=styled.div`
	display:flex;
	align-items:center;
	width:100vw;
	height:100vh;
	background-color:#${props=>props.bg}
`
const ImgContainer=styled.div`
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	flex:1;
`
const Image = styled.img`
	object-fit:contain;
	height:60%;
	${mmobile({
		height:"50%"
	})}
	${pc({
		height:"60%"
	})}
	${ld({
		height:"40%"
	})}
`
const InfoContainer=styled.div`
	display:flex;
	flex-wrap:wrap;
	flex:1;
	padding:30px;
	justify-content:center;
`
const Title=styled.h1`
	font-size:50px;
	font-weight:bolder;
	letter-spacing:3px;
	${mmobile({
		fontSize:"30px"
	})}
	${pc({
		fontSize:"34px"
	})}
	${ld({
		fontSize:"38px"
	})}
`
const Desc=styled.p`
	margin:50px 0px;
	font-size:18px;
	font-family:'Montserrat',sans-serif;
	font-weight:500;
	letter-spacing:3px;
	text-align:center;
	${mmobile({
		margin:"20px 0px",
		fontSize:"13px",
		letterSpacing:"2px"
	})}
	${pc({
		margin:"15px 0px",
		fontSize:"16px",
		letterSpacing:"2px"
	})}
	${ld({
		margin:"20px 0px",
		fontSize:"14px",
	})}
`
const Button=styled.button`
	padding:10px;
	display:"flex",
	alignItems:"center",
	justifyContent:"center",
	background-color:transparent;
	font-family:'Lato',sans-serif;
	font-weight:800;
	font-size:18px;
	border:none;
	background-color:black;
	color:white;
	border-radius:10px;
	cursor:pointer;
	outline:none;
	${mmobile({
		width:"150px",
		height:"40px",
		fontSize:"12px",
	})}
	${pc({
		width:"150px",
		height:"40px",
		fontSize:"14px"
	})}
	${ld({
		width:"150px",
		height:"40px",
		fontSize:"14px"
	})}
`

const Slider = () => {
	const [SliderIndex, setSliderIndex] = useState(0);
	const handleClick=(direction)=>{
		if(direction==="left"){
			setSliderIndex(SliderIndex > 0 ? SliderIndex-1 : 2)
		}
		else{
			setSliderIndex(SliderIndex < 2 ? SliderIndex+1 : 0)	
		}
	}
	return (
		<Container>
			<Arrow direction="left" onClick={()=>handleClick("left")}>
				<ArrowLeftOutlinedIcon />
			</Arrow>
			<Wrapper SlideIndex={SliderIndex}>
				{slideritems.map((item)=>{
					return(
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.imgURL}/>
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				)})}
			</Wrapper>
			<Arrow direction="right" onClick={()=>handleClick("right")}>
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	)
}

export default Slider