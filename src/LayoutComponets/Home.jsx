import React from 'react';
import TopArtifacts from '../Components/TopArtifacts';
import Slider from '../Components/Slider';
import FAQ from '../Components/FAQ';
import Gallery from '../Components/Gallery';
import NewsletterSignup from '../Components/NewsletterSignup';
import Testimonials from '../Components/Testimonials';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopArtifacts></TopArtifacts>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <NewsletterSignup></NewsletterSignup>
        </div>
    );
};

export default Home;