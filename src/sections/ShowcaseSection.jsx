import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectsData } from '../constants';
import ProjectCard from '../components/ProjectCard';

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

    // Get featured project and secondary projects
    const featuredProject = projectsData.find(project => project.isFeatured);
    const secondaryProjects = projectsData.filter(project => !project.isFeatured);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>My Projects</h2>

                {/* Use flex to ensure equal height across main columns */}
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-8'>
                    {/* Featured Project (Spans 6 columns) */}
                    <div className='xl:col-span-6 h-full flex' ref={projectRefs[0]}>
                        <div className='h-full flex flex-col w-full'>
                            <div className='image-wrapper relative overflow-hidden rounded-xl flex-grow-0'>
                                <img
                                    src={featuredProject.imagePath}
                                    alt={featuredProject.title}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <div className='mt-4 space-y-3 flex-grow'>
                                <h2 className='text-2xl md:text-3xl font-bold'>{featuredProject.title}</h2>
                                <p className='text-white-50'>{featuredProject.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Projects Grid */}
                    <div className='xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 h-full'>
                        {secondaryProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} forwardedRef={projectRefs[index + 1]} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
