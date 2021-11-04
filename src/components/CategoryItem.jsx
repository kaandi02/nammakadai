import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  background-color:rgba(25, 118, 210, 0.5);
  transition:0.8s ease all;
  &:hover{
  	transform:scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "50vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: teal;
    color:white;
    cursor: pointer;
    font-weight: 600;
`;
/*const Container=styled.div`
	margin:3px;
	height:70vh;
	font-family:'Urbanist',sans-serif;
	flex:1;
	position:relative;
	border:1px solid lightgray;
	transition:all 0.8s ease;
	cursor:pointer;

	&:hover{
		background-color:#fcf5f5;
		transform:scale(1.01);
	}
	${mobile({
		height:"15vh"
	})}
	${mmobile({
		height:"40vh"
	})}
	${pc({
		height:"60vh"
	})}
`
const Image=styled.img`
	width:100%;
	height:90%;
	object-fit:contain;
	${mmobile({
		height:"80%",
	})}
`
const Info=styled.div`
	position:absolute;
	width:100%;
	height:90%;
	top:0;
	left:0;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:space-between;
`
const Title=styled.h1`
	margin:10px 0px;
	text-transform:uppercase;
	${mobile({
		margin:"0",
		fontSize:"20px",
		display:"none"
	})}
	${mmobile({
		margin:"0",
		fontSize:"20px",
		display:"none"
	})}
	${pc({
		margin:"0",
		fontSize:"20px",
		display:"none"
	})}
`
const Button=styled.button`
	margin:20px 0px;
	border:none;
	padding:10px;
	cursor:pointer;
	font-weight:600;
	background-color:black;
	color:white;
	${mobile({
		margin:"10px 0px",
		display:"none"
	})}
	${mmobile({
		display:"none"
	})}
	${pc({
		display:"none"
	})}
`*/

const CategoryItem = ({item}) => {
	return (
		<Container>
			<Link to={`/products/${item.cat}`}>
				<Image src={item.imgURL} />
	      		<Info>
	      			<Title>{item.title}</Title>
			        <Button>SHOP NOW</Button>
			    </Info>
			</Link>
    	</Container>
	)
}

export default CategoryItem
