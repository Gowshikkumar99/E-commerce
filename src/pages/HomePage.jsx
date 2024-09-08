import React from 'react';
import NavMenu from '../components/Navigation/NavMenu';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';


function HomePage() {
    return (
        <Container>
            <NavMenu />
            <Hero />
            <Categories />
        </Container>
    );
}

export default HomePage;
