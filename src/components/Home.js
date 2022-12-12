import React from 'react';
import CarouselIntervals from '../layouts/Carousel';
import Header from '../layouts/Header';
import ProductGrid from '../layouts/productGrid';
import { Footer } from '../layouts/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <CarouselIntervals />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default Home;
