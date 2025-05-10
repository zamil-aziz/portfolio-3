import React from 'react';

const ProjectCard = ({ project, forwardedRef, onClick }) => {
    const handleClick = () => {
        if (project.link) {
            window.open(project.link, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div className='project-card h-full flex flex-col' ref={forwardedRef}>
            <div
                className='h-full flex flex-col w-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl overflow-hidden'
                onClick={handleClick}
            >
                <div className='image-wrapper h-64 relative rounded-xl overflow-hidden bg-[#14253a] flex-grow-0'>
                    <img src={project.imagePath} alt={project.title} className='w-full h-full object-contain p-4' />
                </div>
                <div className='mt-3 flex-grow flex flex-col p-3'>
                    <h2 className='text-lg md:text-xl font-bold mt-2'>{project.title}</h2>
                    <p className='text-sm text-white-50 mt-2 line-clamp-6'>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
