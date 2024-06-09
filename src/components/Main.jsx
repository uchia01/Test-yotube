import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="category-bar ">
                <div className="category-item">All</div>
                <div className="category-item">Music</div>
                <div className="category-item">T-Series</div>
                <div className="category-item">Arijit Singh</div>
                <div className="category-item">Jaani</div>
                <div className="category-item">Mixes</div>
                <div className="category-item">One Piece</div>
                <div className="category-item">Indian pop music</div>
                <div className="category-item">Tamil Cinema</div>
                <div className="category-item">Lo-fi</div>
            </div>
            <div className="videos">
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Grammar Checker For Chrome" />
                    <div className="video-info">
                        <h3>Grammar Checker For Chrome</h3>
                        <p>Sponsored • QuillBot</p>
                    </div>
                </div>
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Paan Ki Juti" />
                    <div className="video-info">
                        <h3>My Mix</h3>
                        <p>Arijit Singh, Shreya Ghoshal, B Praak and more</p>
                    </div>
                </div>
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Sajni" />
                    <div className="video-info">
                        <h3>Sajni (Full Video)</h3>
                        <p>Arijit Singh, Ram Sampath</p>
                    </div>
                </div>
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Dost Banke" />
                    <div className="video-info">
                        <h3>Mix – Dost Banke (Official Video)</h3>
                        <p>Rahat Fateh Ali Khan, Shreya Ghoshal</p>
                    </div>
                </div>
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Backend Developer Course" />
                    <div className="video-info">
                        <h3>#1 Backend Developer Course</h3>
                        <p>Apply now</p>
                    </div>
                </div>
                <div className="video">
                    <img src="https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif" alt="Humko Tumse Pyaar Hai" />
                    <div className="video-info">
                        <h3>Humko Tumse Pyaar Hai</h3>
                        <p>Alka Yagnik, Kumar Sanu</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
