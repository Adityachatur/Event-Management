import React from 'react';
import Gallery from '../Gallery/Gallery';
import SubTemplate from '../SubTemplate';
import ProjectItem from './ProjectItem';
import video from '../images/ProjectsVideo.mp4'
const Projects = () => {
    return (
        <div>
            <SubTemplate title="Projects" video={video} />
            <ProjectItem />
            <Gallery />
        </div>
    );
};

export default Projects;
