import React from 'react';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Category from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Category />
			<Products />
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Home