import {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Product from './Product';

const Container=styled.div`
	padding:20px;
	display:flex;
	align-items:center;
	justify-content:space-between;
	flex-wrap:wrap;
`

const Products = ({cat,sort,filter}) => {

	const [Products, setProducts] = useState([])
	const [filterProducts, setfilterProducts] = useState([]);

	useEffect(() => {
		const getProducts=async ()=>{
			try{
				const res=await axios.get(cat ? `https://nammakadai.herokuapp.com/api/product?category=${cat}` : "https://nammakadai.herokuapp.com/api/product")
				setProducts(res.data)
			}
			catch(err){
				console.log(err);
			}
		}
		getProducts();
	}, [cat])
	useEffect(() => {
		if(cat){
			setfilterProducts(
				Products.filter((item)=>Object.entries(filter).every(([key,value])=>
					item[key].includes(value)
				))
			)
		}
	}, [cat,Products,filter])
	useEffect(() => {
		if(sort==="newest"){
			setfilterProducts(prev=>
				[...prev].sort((a,b)=>a.createdAt-b.createdAt)
			)
		}
		else if(sort==="asc"){
			setfilterProducts(prev=>
				[...prev].sort((a,b)=>a.price-b.price)
			)
		}
		else{
			setfilterProducts(prev=>
				[...prev].sort((a,b)=>b.price-a.price)
			)
		}
	}, [sort])
	return (
		<Container>
			{cat ? filterProducts.map(item=>(
				<Product item={item} key={item.id}></Product>
			)) : Products.slice(2,5).map(item=>(
				<Product item={item} key={item.id}></Product>
			))}
		</Container>
	)
}

export default Products
