import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const projectRefs = [
        useRef(null), // featured project
        useRef(null), // project 2
        useRef(null), // project 3
        useRef(null), // project 4
        useRef(null), // project 5
    ];

    useGSAP(() => {
        // Animate each project card with staggered delay
        projectRefs.forEach((ref, index) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.2 * (index + 1),
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top bottom-=100',
                        },
                    }
                );
            }
        });

        // Section fade in animation
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Featured Projects</h2>

                <div className='grid grid-cols-1 xl:grid-cols-12 gap-8'>
                    {/* Featured Project (Spans 6 columns) */}
                    <div className='xl:col-span-6' ref={projectRefs[0]}>
                        <div className='h-full flex flex-col'>
                            <div className='image-wrapperrelative overflow-hidden rounded-xl'>
                                <img
                                    src='/images/project1.png'
                                    alt='Featured Project'
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <div className='mt-4 space-y-3'>
                                <h2 className='text-2xl md:text-3xl font-bold'>Project One</h2>
                                <p className='text-white-50'>
                                    This is a brief description of the featured project. It showcases the main features
                                    and functionalities of the project, highlighting its unique aspects and what makes
                                    it stand out.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Projects Grid (Spans 6 columns) */}
                    <div className='xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Project 2 */}
                        <div className='project-card' ref={projectRefs[1]}>
                            <div className='image-wrapper h-64 relative rounded-xl overflow-hidden bg-[#14253a]'>
                                <img
                                    src='/images/project2.png'
                                    alt='Project 2'
                                    className='w-full h-full object-contain p-4 border-2'
                                />
                            </div>
                            <div className='mt-3'>
                                <h2 className='text-lg md:text-xl font-bold mt-2'>Project Two</h2>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className='project-card' ref={projectRefs[2]}>
                            <div className='image-wrapper h-64 relative rounded-xl overflow-hidden bg-[#14253a]'>
                                <img
                                    src='/images/project3.png'
                                    alt='Project 3'
                                    className='w-full h-full object-contain p-4'
                                />
                            </div>
                            <div className='mt-3'>
                                <h2 className='text-lg md:text-xl font-bold mt-2'>Project Three</h2>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className='project-card' ref={projectRefs[3]}>
                            <div className='image-wrapper h-64 relative rounded-xl overflow-hidden bg-[#14253a]'>
                                <img
                                    src='/images/project4.png'
                                    alt='Project 4'
                                    className='w-full h-full object-contain p-4'
                                />
                            </div>
                            <div className='mt-3'>
                                <h2 className='text-lg md:text-xl font-bold mt-2'>Project Four</h2>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className='project-card' ref={projectRefs[4]}>
                            <div className='image-wrapper h-64 relative rounded-xl overflow-hidden bg-[#14253a]'>
                                <img
                                    src='/images/project5.png'
                                    alt='Project 5'
                                    className='w-full h-full object-contain p-4'
                                />
                            </div>
                            <div className='mt-3'>
                                <h2 className='text-lg md:text-xl font-bold mt-2'>Project Five</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
