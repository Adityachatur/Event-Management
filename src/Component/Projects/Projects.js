import React from 'react'
import Gallery from '../Gallery/Gallery'
import SubTemplate from '../SubTemplate'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div>
            <SubTemplate title="Projects" />
            <ProjectItem />
            <Gallery />
        </div>
    )
}

export default Projects
