import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Container=styled.div`
	font-family:'Urbanist',sans-serif;
	display:flex;
	align-items:center;
	justify-content:center;
	height:100vh;
`
const PayButton=styled.button`
	border:none;
	width:120px;
	border-radius:5px;
	padding:20px;
	background-color:black;
	color:white;
	font-weight:600;
	cursor:pointer;
`

const Pay = () => {
	const [StripeToken, setStripeToken] = useState(null)
	const onToken=(token)=>{
		setStripeToken(token)
	}
	useEffect(() => {
		const makeRequest=async ()=>{
			try{
				const res=await axios.post(
					"http://localhost:2410/api/checkout/payment",{
						tokenId:StripeToken.id,
						amount:350000,
						currency:"INR"
					}
				)
				console.log(res.data)
			}
			catch(err){
				console.log(err)
			}
		}
		if(StripeToken)
			makeRequest();
	}, [StripeToken])
	return (
		<Container>
			<StripeCheckout 
				name="NAMMAKADAI" 
				image="https://webuilder-2020.web.app/logo512.jpg" 
				billingAddress
				shippingAddress
				description=" Your total is &#8377;3500"
				amount={350000}
				token={onToken}
				currency="INR"
				stripeKey="pk_test_51JrQUiSH4rFfOIzNG74su3ltLLorEfSHZ6JysKCQ0IUzXe2iPYlfnloEfcswPG2LCmQvxkoLZa6CGxKmQcCPfmbD00n9RbG4sJ"
			>
				<PayButton>PAY NOW</PayButton>
			</StripeCheckout>
		</Container>
	)
}

export default Pay;