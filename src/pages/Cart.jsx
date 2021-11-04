import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {useState,useEffect} from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Add,Remove} from '@mui/icons-material'
import {mobile,mmobile,pc,ld} from '../responsive';
import {useSelector} from 'react-redux';
import {userRequest} from '../requestsMethod.js';
import StripeCheckout from 'react-stripe-checkout';

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
`
const Wrapper=styled.div`
	padding:20px;
`
const Title=styled.h1`
	font-weight:300;
	text-align:center;
`
const Top=styled.div`
	display:flex;
	align-items:center;
	justify-content:space-between;
	padding:20px;
	transition:0.5s all ease;
	${mobile({
		flexDirection:"column"
	})}
`
const TopButton=styled.button`
	font-family:'Poppins',sans-serif;
	padding:15px;
	font-weight:600;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor:pointer;
	outline:none;
	background-color:white;
	border:1px solid lightgray;
	transition:0.5s all ease;

	&:hover{
		background-color:${props=>props.type==="continue" ?"#1976D2":"rgb(0,150,50)"};
		color:white;
		margin-right:${props=>props.type==="checkout" ?"-10px":"0px"};
		margin-left:${props=>props.type==="continue" ?"-10px":"0px"};
	}
	${mobile({
		width:"150px",
		height:"40px",
		fontSize:"12px",
		borderRadius:"8px",
		padding:"0",
		backgroundColor:"rgb(0,150,50)",
		color:"white",
		"&:hover":{
			backgroundColor:"rgb(0,150,0)",
		},
	})}
`
const TopTexts=styled.div`
	display:flex;
	align-items:center;
`
const TopText=styled.span`
	display:flex;
	align-items:center;
	text-decoration:underline;
	cursor:pointer;
	margin:0px 10px;
	${mobile({
		margin:"20px 10px",
		fontSize:"13px"
	})}
`
const Bottom=styled.div`
	display:flex;
	justify-content:space-between;
	padding:20px;
	${mobile({
		flexDirection:"column"
	})}
	${mmobile({
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center"
	})}
	${pc({
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center"
	})}
`
const Info=styled.div`
	flex:4;
`
const Product=styled.div`
	display:flex;
	justify-content:space-between;
	margin:15px;
	${mobile({
		flexDirection:"column"
	})}
`
const ProductDetail=styled.div`
	flex:2;
	display:flex;
`
const Image=styled.img`
	width:20%;
	object-fit:contain;
	${mobile({
		width:"20%"
	})}
	${mmobile({
		width:"15%"
	})}
`
const Details=styled.div`
	padding:20px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	${mobile({
		justifyContent:"center"
	})}
`
const ProductName=styled.span`
	padding:10px;
	${mobile({
		fontSize:"13px"
	})}
	${mmobile({
		fontSize:"13px"
	})}
	${pc({
		fontSize:"16px"
	})}
`
/*const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``;*/

const PriceDetail=styled.div`
	flex:1;
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
	font-family:'Lato',sans-serif;
`
const ProductAmountContainer=styled.div`
	display:flex;
	align-items:center;
	margin-bottom:20px;
	${mobile({
		fontSize:"18px"
	})}
`
const ProductAmount=styled.div`
	width:100%;
	font-size:24px;
	margin:5px;
	${mobile({
		fontSize:"18px"
	})}
	${mmobile({
		fontSize:"15px"
	})}
	${pc({
		fontSize:"20px"
	})}
`
const ProductPrice=styled.span`
	font-size:30px;
	font-weight:300;
	${mobile({
		fontSize:"20px"
	})}
	${mmobile({
		fontSize:"20px"
	})}
	${pc({
		fontSize:"25px"
	})}
`
const Hr=styled.hr`
	background-color:#eee;
	border:none;
	height:1px;
`
const Summary=styled.div`
	flex:1;
	height:auto;
	border:0.5px solid lightgray;
	border-radius:10px;
	padding:20px;
	${mobile({
		height:"auto",
		marginTop:"10px"
	})}
	${mmobile({
		width:"40vw",
		height:"auto",
		marginTop:"10px"
	})}
	${pc({
		width:"40vw",
		height:"auto",
		marginTop:"10px"
	})}
	${ld({
		height:"auto",
	})}

`
const SummaryTitle=styled.h2`
	font-weight:600;
`
const SummaryItem=styled.div`
	margin:30px 0px;
	display:flex;
	justify-content:space-between;
	font-weight:${props=>props.type==="total" && "500"};
	font-size:${props=>props.type==="total" && "24px"};
`
const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
	font-family:'Poppins',sans-serif;
	width:100%;
	padding:10px;
	margin-bottom:10px;
	font-weight:600;
	text-align:center;
	cursor:pointer;
	outline:none;
	background-color:${props=>props.type!=="cod" ?"teal":"white"};
	color:${props=>props.type!=="cod" ?"white":"black"};
	border:1px solid lightgray;
	transition:0.5s all ease;
	&:hover{
		background-color:${props=>props.type!=="cod" ?"teal":"#1976D2"};
		color:white;
	}
`

const Cart = () => {
	const cart=useSelector(state=>state.cart);
	const [StripeToken, setStripeToken] = useState(null)
	const history=useHistory()
	const onToken=(token)=>{
		setStripeToken(token)
	}
	useEffect(() => {
		const makeRequest=async ()=>{
			try{
				const res=await userRequest.post(
					"/checkout/payment",{
						tokenId:StripeToken.id,
						amount:cart.total*100,
						currency:"INR",
					}
				)
				history.push("/success", {
		          stripeData: res.data,
		          products: cart, });
		      	}
			catch(err){
				console.log(err)
			}
		}
		if(StripeToken && cart.total>0)
			makeRequest();
	}, [StripeToken,cart.total,history])
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>Your Bag</Title>
				<Top>
					<Link to='/products/women' style={{"textDecoration":"none","color":"white"}}>
						<TopButton type="continue">CONTINUE SHOPPING</TopButton>
					</Link>
					<TopTexts>
						<TopText>Shopping Bag ({cart.quantity})</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					{/*<Link to='#' style={{"textDecoration":"none","color":"white"}}>
						<TopButton type="checkout">CHECKOUT</TopButton>
					</Link>*/}
				</Top>
				<Bottom>
					<Info>
					{cart.products.map((product)=>(
						<>
							<Product>
								<ProductDetail>
									<Image src={product.image} />
									<Details>
										<ProductName><b>Product:</b> {product.title}</ProductName>
										<ProductName><b>ID:</b> {product._id}</ProductName>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>&#8377;{product.price*product.quantity}</ProductPrice>
								</PriceDetail>
							</Product>
							<Hr/>
						</>
					))}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>&#8377;{cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>&#8377;40</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>-&#8377;40</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>&#8377;{cart.total}</SummaryItemPrice>
						</SummaryItem>
						{/*<Button type="cod">PLACE ORDER WITH COD</Button>*/}
						<StripeCheckout 
							name="NAMMAKADAI" 
							image="https://webuilder-2020.web.app/logo512.jpg" 
							billingAddress
							shippingAddress
							description={`Your total is \u20B9 ${cart.total}`}
							amount={cart.total*100}
							token={onToken}
							currency="INR"
							stripeKey="pk_test_51JrQUiSH4rFfOIzNG74su3ltLLorEfSHZ6JysKCQ0IUzXe2iPYlfnloEfcswPG2LCmQvxkoLZa6CGxKmQcCPfmbD00n9RbG4sJ"
							>
							<Button type="cod">PAY NOW</Button>
					</StripeCheckout>
			</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default Cart
