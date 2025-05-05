import { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = () => e => {
        const card = cardRefs.current[index];
        if (!card) return;

        // Get relative mouse postition
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.top - rect.height / 2;

        // calculate the angle from the center of the card
        let angle = Math.atan2(y, x) * (180 / Math.PI);

        angle = (angle + 360) % 360; // Normalize angle to [0, 360]

        card.style.setProperty('--start', angle + 60);
    };

    return (
        <div
            ref={el => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className='card card-border timeline-card rounded-xl p-10'
        >
            <div className='glow' />
            {/* <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5 }, (_, i) => (
                    <img src='/images/star.png' key={i} alt='star' className='size-5' />
                ))}
            </div> */}
            <div>
                <p className='text-white50 text-lg'>{card.lessons}</p>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default GlowCard;
