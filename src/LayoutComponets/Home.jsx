import React from 'react';
import TopArtifacts from '../Components/TopArtifacts';
import Slider from '../Components/Slider';
import ExtraSection from '../Components/ExtraSection';
import FAQ from '../Components/FAQ';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopArtifacts></TopArtifacts>
            <ExtraSection></ExtraSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;