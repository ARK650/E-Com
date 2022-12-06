import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
import CarouselIntervals from '../layouts/Carousel';
import Header from '../layouts/Header';
import ProductGrid from '../layouts/productGrid';
import { Footer } from '../layouts/Footer';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {' '}
      <div className='home'>
        Hello Welcome <br />
        {user && user.email}
        <Header />
        <CarouselIntervals />
        <ProductGrid />
        <Footer />
      </div>
      <div>
        <Button variant='primary' onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
