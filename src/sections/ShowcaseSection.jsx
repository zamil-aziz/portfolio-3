import { useRef } from 'react';

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Project 1' />
                        </div>
                        <div className='text-content'>
                            <h2>Project Title</h2>
                            <p>Project desc</p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Project 2' />
                            </div>
                            <div className='text-content'>
                                <h2>Project Title</h2>
                            </div>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Project 3' />
                            </div>
                            <div className='text-content'>
                                <h2>Project Title</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
