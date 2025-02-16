import React, { useState, useEffect } from 'react';

const LiveUpdates = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const updates = [
        {
            icon: "icon-shopping-basket",
            text: "Flash deal: 20% off on your next booking. Hurry!"
        },
        {
            icon: "icon-timer",
            text: "Express service available!"
        },
        {
            icon: "icon-star",
            text: "You're in the top 10% of frequent travelers this month!"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIndex((current) => (current + 1) % updates.length);
                setIsAnimating(false);
            }, 500);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="live-updates">
            <style>
                {`
                    .live-updates {
                        height: 40px;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .header-news {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    
                    .news-item {
                        display: none;
                        transform: translateY(0);
                        transition: transform 0.5s ease-in-out;
                    }
                    
                    .news-item.active {
                        display: block;
                    }
                    
                    .news-item.sliding {
                        transform: translateY(-100%);
                    }
                    
                    .news-item a {
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        color: inherit;
                        padding: 10px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    
                    .news-item i {
                        margin-right: 10px;
                        flex-shrink: 0;
                    }
                `}
            </style>
            <ul className="header-news">
                {updates.map((update, index) => (
                    <li 
                        key={index}
                        className={`news-item ${index === activeIndex ? 'active' : ''} ${isAnimating ? 'sliding' : ''}`}
                    >
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <i className={update.icon}></i>
                            <span>{update.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LiveUpdates;