import React from 'react';
import AboutMeHome from './about';
import HeroHome from './hero';
import PastExperienceHome from './past-experience';
import RecentWorkHome from './recent-work';

const Home = (props) => {
    return (
        <div className="bg-red-400">
            <HeroHome />
            <AboutMeHome />
            <PastExperienceHome />
            <RecentWorkHome />
		</div>
    );
}

export default Home;