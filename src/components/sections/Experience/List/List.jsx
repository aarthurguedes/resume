import React from 'react'

import './List.css'
import Link from '../../../common/Link/Link'

const experienceClassName = 'experience flex-column'

const getClassName = (currentIndex, listLength) => currentIndex === listLength - 1 ? 
    experienceClassName : experienceClassName.concat(' experience--mb')

export default ({ experiences }) =>
    experiences.map((experience, index) => {
        return (
            <div className={getClassName(index, experiences.length)} key={index}>
                <Link href={experience.companyPage} 
                      className="experience__title">
                    {experience.company}
                </Link>
                <span className="experience__duration span--light">{experience.duration}</span>
                <span className="span--semi-bold">Main Activities:</span>
                <ul className="experience__activities">
                    {experience.activities.map(activity => <li key={activity}><p>{activity}</p></li>)}
                </ul>
                <p>
                    <span className="span--semi-bold">Technologies: </span>
                    <span>{experience.technologies}</span>
                </p>
            </div>
        )
    })
