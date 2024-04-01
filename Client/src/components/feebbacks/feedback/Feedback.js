
import React, { useContext, useRef } from 'react';
import "./Feedback.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from 'react-slick';
import FeedbackCard from "../FeedbackCard/FeedbackCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemContext } from '../../../Context/ThemContext';

const Feedback = () => {
    const feedbackData = [
        {
           email: 'Mim@example.com',
            img: 'https://i.ibb.co/gryYWPC/Porile2.jpg',
            rating: 4,
            name: 'Mim Akter',
            message: '"Jane Smith praises her 5-star stay, highlighting the impeccable service and luxurious amenities, making her hotel experience truly exceptional."'
        },
        {
            email: 'Junayet@example.com',
            img: 'https://i.ibb.co/TPg8qyp/profile1.jpg',
            rating: 5,
            name: 'Jubayet Mia',
            message: '"Jane Smith praises her 3-star stay, highlighting the impeccable service and luxurious amenities, making her hotel experience truly exceptional."'
        },
        {
            email: 'Junayet@example.com',
            img: 'https://i.ibb.co/b5v5pQQ/profile3.jpg',
            rating: 5,
            name: 'Junayet Shiblu',
            message: '"Samantha Brown commends her 5-star experience, noting the impeccable cleanliness and convenient location."'
        }
    ];
    const slideRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    const sliderLeft = () => {
        slideRef.current.slickNext();
    };

    const sliderRight = () => {
        slideRef.current.slickPrev();
    };
    const{Dark}=useContext(ThemContext)

    return (
        <div className='project-container max-w-5xl mx-auto'>
        <h1 className={`my-6 text-xl text-center font-semibold ${Dark === "light" ? "text-gray-700" : "text-gray-200"}`}>Our Website Feedback</h1>

            <div className='arrow-right' onClick={sliderRight}>
                <span className='icons-1'><IoIosArrowBack /> </span>
            </div>
            <div className='arrow-left' onClick={sliderLeft}>
                <span className='icons-2'> <IoIosArrowForward /></span>
            </div>
            <div className='project-content'>
                <Slider ref={slideRef} {...settings}>
                    {feedbackData.map((item, index) => (
                        <FeedbackCard key={index} details={item}></FeedbackCard>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;
