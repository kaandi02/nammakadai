import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ShoppingCart,FavoriteBorderOutlined,SearchOutlined} from '@mui/icons-material'
import {mmobile,pc,ld} from '../responsive';

const Info=styled.div`
	opacity:0;
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	background-color:rgba(0,0,0,0.2);
	z-index:3;
	display:flex;
	align-items:center;
	justify-content:center;
	transition:all 0.5s ease;
	cursor:pointer;
`
const Container=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	flex:1;
	margin:5px;
	min-width:280px;
	height:350px;
	background: rgba(225,250,250,0.5);
	position:relative;

	&:hover ${Info}{
		opacity:1;
	}
	${mmobile({
		minWidth:"160px",
		height:"200px"
	})}
	${pc({
		minWidth:"200px",
		height:"250px"
	})}
	${ld({
		minWidth:"240px",
		height:"300px"
	})}
`
/*const Circle=styled.div`
	width:100%;
	height:100%;
	border-radius:50%;
	background-color:white;
	position:absolute;
`*/
const Image=styled.img`
	height:75%;
	z-index:2;
	${mmobile({
		height:"60%"
	})}
	${ld({
		height:"80%"
	})}
`
const Icon=styled.div`
	width:40px;
	height:40px;
	border-radius:50%;
	margin:10px;
	background-color:white;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor:pointer;
	transition:all 0.5s ease;
	outline:none;
	border:none;

	&:hover{
		background-color:#1976D2;
		transform:scale(1.1);
		color:white;
	}
`

const Product = ({item}) => {
	return (
		<Container>
			<Image src={item.image} />
			<Info>
				<Icon>
					<ShoppingCart />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
				<Link to={`/product/${item._id}`} style={{"textDecoration":"none","color":"black"}}>
					<Icon>
						<SearchOutlined />
					</Icon>
				</Link>
			</Info>
		</Container>
	)
}

export default Product