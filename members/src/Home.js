import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';

function Home() {
    return (
        <div className='home'>
            <div className="homeContainer">
                <Sidebar/>
                <div className='intro'>
                <div id="landing-info">
                    <div>
                        <h1>India's Leading <span>FOSS &amp; Computer Science Club.</span></h1>
                        <p class="intropara">amFOSS, a student-run community with over 50+ 
                        members from Amrita Vishwa Vidyapeetham, Amritapuri, over the last 14 years, 
                        has helped 100+ passionate students to transform into successful &amp; 
                        innovative engineers who today work across the world in Fortune 500 Companies 
                        loving what they do.</p>
                        <p className='intropara'>Here are the members of the club and the stack in which they are good at.This clarifies
                             your doubts regarding which person can clarify your doubt with ease.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home