import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile,mmobile,pc} from '../responsive';

const Container=styled.div`
	font-family:'Montserrat',sans-serif;
`
const Title=styled.h1`
	margin:20px;
`
const FilterContainer=styled.div`
	display:flex;
	justify-content:space-between;
	${mobile({
		justifyContent:"center",
	})}
	${mmobile({
		justifyContent:"center",
	})}
`
const Filter=styled.div`
	margin:20px;
	font-size:20px;
	${mobile({
		margin:"10px",
		fontSize:"14px"
	})}
	${mmobile({
		margin:"10px",
		fontSize:"16px"
	})}
	${pc({
		margin:"20px",
		fontSize:"16px"
	})}
`
const FilterText=styled.span`
	font-weight:600;
	margin-right:15px;
	${mmobile({
		marginRight:"10px",
	})}
	${pc({
		marginRight:"10px",
	})}
`
const Select=styled.select`
	padding:10px;
	margin:0px 10px;
	font-family:'Urbanist',sans-serif;
	font-size:16px !important;
	${mobile({
		margin:"10px 0px",
		fontSize:"14px !important"
	})}
	${mmobile({
		margin:"10px 0px",
		padding:"5px",
		fontSize:"14px !important"
	})}
	${pc({
		margin:"10px 0px",
		padding:"5px",
		fontSize:"14px !important"
	})}
`
const Option=styled.option`
	font-size:16px;
`

const ProductList = () => {
	const handleFilters=(e)=>{
		const value=e.target.value;
		setFilters({
			...Filters,
			[e.target.name]:value,
		})
	}
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const loc = useLocation();
	const cat = loc.pathname.split('/')[2];
	const [Filters,setFilters]=useState({})
	const [Sort,setSort]=useState("newest")

	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>{capitalizeFirstLetter(cat)}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products :</FilterText>
					<Select name="size" onChange={handleFilters}>
						<Option disabled defaultValue>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
						<Option>XXL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products :</FilterText>
					<Select onChange={e=>setSort(e.target.value)}>
						<Option value="newest" defaultValue>Newest</Option>
						<Option value="asc">Price(asc)</Option>
						<Option value="desc">Price(desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} sort={Sort} filter={Filters}/>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default ProductList