
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { tension: 300, friction: 10 },
    });

    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center'>

            <FadeLoader size={150} color="#36d7b7" />
        </div>
    );
};

export default Loading;