import styled from 'styled-components';

const Container=styled.div`
	font-family:"Urbanist",sans-serif;
	font-size:15px !important;
	font-weight:500;
	height:40px;
	background-color:teal;
	color:white;
	display:flex;
	align-items:center;
	justify-content:center;
`

const Announcement = () => {
	return (
		<Container>
			Super Deals ! Free Delivery Over &#8377;500
		</Container>
	)
}

export default Announcement