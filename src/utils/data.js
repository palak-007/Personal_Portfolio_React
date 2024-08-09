import front_end_icon from '../assets/front-end.png'
import back_end_icon from '../assets/back-end.png'
import soft_skills_icon from '../assets/soft-skills.png'
import languages_icon from '../assets/languages.png'
import tools_icon from '../assets/tools.png'

import mail_icon from '../assets/mail.png'
import call_icon from '../assets/call.png'
import linkedIn_icon from '../assets/linkedIN.png'
import github_icon from '../assets/gitHub.png'

import proj_1 from '../assets/Proj-1.jpg'
import proj_2 from '../assets/Proj-2.jpg'
import proj_3 from '../assets/Proj-3.jpg'
import proj_4 from '../assets/Proj-4.jpg'
import proj_5 from '../assets/Proj-5.jpg'

export const iconsData = {
    mail_icon,
    call_icon,
    linkedIn_icon,
    github_icon,
}

export const SkillsData = [
    {
        title: 'FrontEnd',
        icon: front_end_icon,
        skills: [
            { skill: 'HTML5', percentage: '80%' },
            { skill: 'CSS3', percentage: '80%' },
            { skill: 'JavaScript', percentage: '70%' },
            { skill: 'React.js', percentage: '60%' },
        ]
    },
    {
        title: 'Databases',
        icon: back_end_icon,
        skills: [
            {skill: 'MySQL', percentage: '70%'},
            //{ skill: 'Node.js', percentage: '50%' },
            //{ skill: 'Express.js', percentage: '45%' }
        ]
    },
    {
        title: 'Tools',
        icon: tools_icon,
        skills: [
            { skill: 'Git & GitHub', percentage: '70%' },
            { skill: 'Visual Studio Code', percentage: '85%' },
            { skill: 'NetBeans', percentage: '65%' }
        ]
    },
    {
        title: 'Soft Skills',
        icon: soft_skills_icon,
        skills: [
            { skill: 'Problem Solving', percentage: '80%' },
            { skill: 'Communication', percentage: '75%' },
            { skill: 'TeamWork', percentage: '80%' },
            { skill: 'Resourcefullness', percentage: '85%' },
        ]
    },
    {
        title: 'Languages',
        icon: languages_icon,
        skills: [
            { skill: 'C, C++', percentage: '80%' },
            { skill: 'Java', percentage: '70%' },
            { skill: 'SQL', percentage: '70%' },
            { skill: 'JavaScript', percentage: '70%' },
        ]
    },
]

export const ProjectsData = [
    {
        title: "PERSONAL PORTFOLIO",
        img: proj_1,
        repo: "",
        demoURL: "",
        tech: ["HTML", "CSS", "JS", "REACT"],
        details: [
            "Implemented responsive design for multi-device compatibility",
            "Utilized React components for maintainable code"
        ]
    },
    /*{
        title: "SPOTIFY CLONE",
        img: proj_2,
        repo: "https://github.com/palak-007/Spotify_Clone_React.git",
        demoURL: "https://palak-007.github.io/Spotify_Clone_React/",
        tech: ["REACT JS", "TAILWIND CSS"],
        details: [
            "Dynamic and responsive music streaming app",
            "Modern, user-friendly interface that mimics Spotify’s design and functionality"
        ]
    },*/
    {
        title: "REST Countries API",
        img: proj_3,
        repo: "https://github.com/palak-007/Rest_Countries_API.git",
        demoURL: "https://palak-007.github.io/Rest_Countries_API/",
        tech: ["HTML", "CSS", "JS", "REST API"],
        details: [
            "Interactive web application that fetches and displays data from the REST Countries API",
            "Clean, responsive interface with features such as country search, filter by region, and detailed country information"
        ]
    },
    /*{
        title: "ROCK, PAPER, SCISSOR GAME",
        img: proj_4,
        repo: "",
        demoURL: "",
        tech: ["HTML", "CSS", "JS"],
        details: [
            "Interactive web application",
            "Clean, responsive interface"
        ]
    },*/
    {
        title: "TODO APP",
        img: proj_5,
        repo: "https://github.com/palak-007/TODO_APP.git",
        demoURL: "https://palak-007.github.io/TODO_APP/",
        tech: ["HTML", "CSS", "JS"],
        details: [
            "Interactive web application",
            "Clean, responsive interface"
        ]
    }
]
