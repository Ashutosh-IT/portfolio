import Moodl from '../../assets/projects_images/Moodl.png'
import CheatMeal from '../../assets/projects_images/CheatMeal.png'
import todo from '../../assets/projects_images/todo.png'
import pf from '../../assets/projects_images/pf.png'
import PassOP from '../../assets/projects_images/PassOP.png'
import NetflixGPT from '../../assets/projects_images/NetflixGPT.png'

const dataProjects = [
    {
        name: 'Cheat Meal',
        image: CheatMeal,
        deployed_url: 'https://cheatmeal.onrender.com/',
        github_url: 'https://github.com/Ashutosh-IT/cheat-meal-new-version.git',
        category: ['react.js','node.js']
    },
    {
        name: 'PassOP : Password Manager',
        image: PassOP,
        deployed_url: 'https://passopashu.netlify.app/',
        github_url: 'https://github.com/Ashutosh-IT/PassOP-Password_Manager_for_localStorage',
        category: ['react.js']
    },

    {
        name: 'NetflixGPT',
        image: NetflixGPT,
        deployed_url: 'https://github.com/Ashutosh-IT/netflix-gpt',
        github_url: 'https://github.com/Ashutosh-IT/netflix-gpt',
        category: ['react.js']
    },

   

    {
        name: 'Moodl',
        image: Moodl,
        deployed_url: 'https://moodl.netlify.app/',
        github_url: 'https://github.com/Ashutosh-IT/moodl-mood-tracker',
        category: ['react.js']
    },

    {
        name: 'Todo App',
        image: todo,
        deployed_url: 'https://github.com/Ashutosh-IT/todo-app',
        github_url: 'https://github.com/Ashutosh-IT/todo-app',
        category: ['node.js','react.js']
    },

    {
        name: 'Dev Portfolio',
        image: pf,
        deployed_url: 'https://ashu-portfolio1.vercel.app/',
        github_url: 'https://github.com/Ashutosh-IT/portfolio',
        category: ['react.js']
    },

]

export default dataProjects;