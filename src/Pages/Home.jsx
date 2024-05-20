import React from 'react';
import Banner from '../Components/Banner';
import RecentBlogs from '../Components/RecentBlogs';
import NewsLetter from '../Components/NewsLetter';
import Review from '../Components/Review';
import RatingSection from '../Components/RatingSection';
import { motion, useScroll, useSpring } from "framer-motion";
import Header from '../Components/Header';

import "./style.css"

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <div>
            <div className="progress-bar"> <Header ></Header></div>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <RatingSection></RatingSection>

        </div>
    );
};

export default Home;