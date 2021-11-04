import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import {Remove,Add} from '@mui/icons-material'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile,mmobile,pc,ld} from '../responsive'
import {publicRequest} from '../requestsMethod.js'
import {addProduct} from '../Redux/CartRedux.js'
import {useDispatch} from 'react-redux'

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
`
const Wrapper=styled.div`
	padding:50px;
	display:flex;
	${mobile({
		padding:"20px",
		flexDirection:"column"
	})}
	${mmobile({
		padding:"20px",
	})}
	${pc({
		padding:"30px",
	})}
	${ld({
		padding:"40px",
	})}
`
const ImgContainer=styled.div`
	flex:1;
`
const Image=styled.img`
	width:100%;
	height:90vh;
	object-fit:contain;
	${mobile({
		height:"50vh"
	})}
	${mmobile({
		height:"50vh"
	})}
	${pc({
		height:"70vh"
	})}
	${ld({
		height:"80vh"
	})}
`
const InfoContainer=styled.div`
	flex:1;
	padding:0px 50px;
	${mobile({
		padding:"0px 10px"
	})}
	${mmobile({
		padding:"0px 20px"
	})}
	${pc({
		padding:"0px 30px"
	})}
	${ld({
		padding:"0px 40px"
	})}
`
const Title=styled.h1`
	font-weight:400;
	${mobile({
		margin:"30px 0px 0px 0px",
		fontSize:"24px"
	})}
	${mmobile({
		margin:"20px 0px 0px 0px",
		fontSize:"24px"
	})}
	${pc({
		margin:"20px 0px 0px 0px",
		fontSize:"24px"
	})}
	${ld({
		margin:"20px 0px 0px 0px",
		fontSize:"24px"
	})}
`
const Desc=styled.p`
	margin:20px 0px;
	${mobile({
		fontSize:"16px"
	})}
	${mmobile({
		fontSize:"13px"
	})}
	${pc({
		fontSize:"16px"
	})}
	${ld({
		fontSize:"16px"
	})}
`
const Price=styled.span`
	font-size:40px;
	${mobile({
		fontSize:"30px"
	})}
	${mmobile({
		fontSize:"32px"
	})}
	${pc({
		fontSize:"32px"
	})}
	${ld({
		fontSize:"32px"
	})}
`
const FilterContainer=styled.div`
	width:50%;
	display:flex;
	margin:30px 0px;
	justify-content:space-between;
	${mobile({
		margin:"15px 0px"
	})}
	${mmobile({
		margin:"15px 0px"
	})}
	${pc({
		margin:"20px 0px"
	})}
	${ld({
		margin:"25px 0px"
	})}
`
const Filter=styled.div`
	display:flex;
	align-items:center;
`
const FilterTitle=styled.span`
	font-size:20px;
	font-weight:300;
	${mobile({
		fontSize:"16px"
	})}
	${mmobile({
		fontSize:"18px"
	})}
	${pc({
		fontSize:"18px"
	})}
	${ld({
		fontSize:"18px"
	})}
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

/*const FilterQuantity=styled.div`
	width:80px;
	height:30px;
	display:flex;
	align-items:center;
	justify-content:center;
	font-weight:500;
	font-size:15px;
	border-radius:10px;
	background-color:lightgray;
	margin:0px 5px;
	cursor:pointer;
	${mobile({
		width:"66.7px",
		height:"25px"
	})}
`;
const FilterItem=styled.span`
	${mobile({
		fontSize:"12px"
	})}
	${mmobile({
		fontSize:"12px"
	})}
	${pc({
		fontSize:"14px"
	})}
	${ld({
		fontSize:"14px"
	})}
`*/
const AddContainer=styled.div`
	width:50%;
	display:flex;
	align-items:center;
	justify-content:space-between;
	${mobile({
		width:"75%"
	})}
	${mmobile({
		width:"65%"
	})}
	${pc({
		width:"70%"
	})}
	${ld({
		width:"55%"
	})}
`
const AmountContainer=styled.div`
	font-weight:700;
	display:flex;
	align-items:center;
`
const Amount=styled.span`
	width:30px;
	height:30px;
	border-radius:50%;
	border:1px solid teal;
	display:flex;
	align-items:center;
	justify-content:center;
	margin:0px 5px;
`
const Button=styled.button`
	font-family:'Montserrat',sans-serif;
	padding:15px;
	border:2px solid #1976d2;
	background-color:white;
	border-radius:0px;
	letter-spacing:1px;
	cursor:pointer;
	font-weight:400 !important;
	transition:0.4s all ease;

	&:hover{
		border-radius:8px;
		color:white;
		background-color:#1976d2;
	}
	${mobile({
		fontSize:"10px",
		marginLeft:"10px",
		backgroundColor:"#1976d2",
		borderRadius:"8px",
		color:"white",
	})}
	${mmobile({
		fontSize:"10px",
		marginLeft:"10px",
		backgroundColor:"#1976d2",
		borderRadius:"4px",
		color:"white",
	})}
`

const Product = () => {
	const loc = useLocation();
	const pid = loc.pathname.split('/')[2];
	const [Product, setProduct] = useState({color:[],size:[],price:""})
	const [Quantity,setQuantity]= useState(1);
	const [Color,setColor]= useState("");
	const [Size,setSize]= useState("");
	const dispatch=useDispatch();

	useEffect(() => {
		const getProducts=async ()=>{
			try{
				const res=await publicRequest.get('/product/find/'+pid);
				setProduct(res.data);
			}
			catch(err){
				console.log(err)
			}
		}
		getProducts()
	}, [pid])

	const handleClick=()=>{
		dispatch(addProduct({...Product,quantity:Quantity,Color,Size}))
	}
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={Product.image} />
				</ImgContainer>
				<InfoContainer>
					<Title>{Product.title}</Title>
					<Desc>{Product.desc}</Desc>
					<Price>{`\u20B9 ${Product.price}`}</Price>
					<FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
              	Product.color.map((c)=>(
              		<FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              	))
            	}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e)=>setSize(e.target.value)}>
              {
              	Product.size.map((s)=>(
              		<FilterSizeOption key={s}>{s}</FilterSizeOption>
              	))
              }
              </FilterSize>
            </Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={()=>{if(Quantity>1){setQuantity(Quantity-1)}}} style={{"cursor":"pointer"}}/>
							<Amount>{Quantity}</Amount>
							<Add onClick={()=>{setQuantity(Quantity+1)}} style={{"cursor":"pointer"}}/>
						</AmountContainer>
						<Button onClick={()=>handleClick()}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Product