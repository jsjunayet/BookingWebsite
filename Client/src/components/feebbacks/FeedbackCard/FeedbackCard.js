import React from 'react';
import "./FeedbackCard.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const FeedbackCard = ({ details }) => {
    return (
        <div className='project-card bg-base-100'>
            <div className="avatar flex justify-center items-center">
                <div className="w-24  border-2  border-gray-400 rounded-full">
                    <img src={details?.img} alt='logo'></img>
                </div>
            </div>
            <div className=" text-center mb-2">
                <h2 className=" text-center mt-2 mb-1 text-gray-900">{details?.email}</h2>
                <div style={{ display: 'inline-block' }}>
                    <Rating style={{ maxWidth: 140 }} isDisabled={true} value={details?.rating} />
                </div>
            </div>
            <p className='mb-1 font-medium text-xl text-black'>{details?.name}</p>
            <p className=' text-gray-600'>{details?.message}</p>
        </div>
    );
};

export default FeedbackCard;