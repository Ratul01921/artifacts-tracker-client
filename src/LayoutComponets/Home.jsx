import React from 'react';
import TopArtifacts from '../Components/TopArtifacts';
import Slider from '../Components/Slider';
import FAQ from '../Components/FAQ';
import Gallery from '../Components/Gallery';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopArtifacts></TopArtifacts>
            <Gallery></Gallery>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;