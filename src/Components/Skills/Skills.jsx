import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SkillsData } from '../../utils/data'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SkillsData[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkill(data);
    }

    return (
        <section className='skills-container' id='skill-section'>
            <h5 className='text'>Technical Proficiency</h5>

            <div className='skills-content'>
                <div className="skills">
                    {
                        SkillsData.map((item) => (
                            <SkillCard
                                key={item.title}
                                iconURL={item.icon}
                                title={item.title}
                                isActive={selectedSkill.title === item.title}
                                onClick={ () =>{
                                    handleSelectedSkill(item);
                                }}
                            ></SkillCard>
                        ))
                    }
                </div>

                <div className="skills-info">
                    <SkillInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    >

                    </SkillInfoCard>
                </div>
            </div>
        </section>
    )
}

export default Skills