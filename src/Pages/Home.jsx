import React from 'react';
import Banner from '../Components/Banner';
import RecentBlogs from '../Components/RecentBlogs';
import NewsLetter from '../Components/NewsLetter';
import Review from '../Components/Review';
import RatingSection from '../Components/RatingSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <RatingSection></RatingSection>
           
        </div>
    );
};

export default Home;