import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item, index) => (
                    <div key={`counter-item-${index}`} className='bg-zinc-900 rounded-lg p-10'>
                        <div className='text-white-50 text-lg'>
                            <div className='counter-number text-white text-5xl font-bold mb-2'>
                                <CountUp
                                    suffix={item.suffix}
                                    start={0}
                                    end={item.value}
                                    duration={2.75}
                                    separator=','
                                    decimal='.'
                                    decimals={0}
                                />
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
