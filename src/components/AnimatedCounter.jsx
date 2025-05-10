import { counterItems } from '../constants';
import CountUp from 'react-countup';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    // Track whether counters have started
    const [countersStarted, setCountersStarted] = useState([]);

    useGSAP(() => {
        // Create a scroll trigger that activates when the counter section comes into view
        ScrollTrigger.create({
            trigger: counterRef.current,
            start: 'top 80%', // Trigger when the top of the element hits 80% down the viewport
            onEnter: () => {
                // Initialize all counters as started when scrolled into view
                setCountersStarted(Array(counterItems.length).fill(true));
            },
            once: true, // Only trigger once
        });
    }, []);

    return (
        <div id='counter' ref={counterRef} className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item, index) => (
                    <div key={`counter-item-${index}`} className='bg-zinc-900 rounded-lg p-10'>
                        <div className='text-white-50 text-lg'>
                            <div className='counter-number text-white text-5xl font-bold mb-2'>
                                {countersStarted[index] ? (
                                    <CountUp
                                        suffix={item.suffix}
                                        start={0}
                                        end={item.value}
                                        duration={2.75}
                                        separator=','
                                        decimal='.'
                                        decimals={0}
                                    />
                                ) : (
                                    <span>0{item.suffix || ''}</span>
                                )}
                            </div>
                            <div className='counter-label text-gray-300'>{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
