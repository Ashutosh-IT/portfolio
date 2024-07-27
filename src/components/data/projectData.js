import landing from '../../assets/projects_images/landing.png'
import CheatMeal from '../../assets/projects_images/CheatMeal.png'
import todo from '../../assets/projects_images/todo.png'
import pf from '../../assets/projects_images/pf.png'
import PassOP from '../../assets/projects_images/PassOP.png'
import NetflixGPT from '../../assets/projects_images/NetflixGPT.png'

const dataProjects = [
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
        deployed_url: '',
        github_url: 'https://github.com/Ashutosh-IT/netflix-gpt',
        category: ['react.js']
    },

    {
        name: 'Cheat Meal',
        image: CheatMeal,
        deployed_url: '',
        github_url: 'https://github.com/Ashutosh-IT/cheat-meal-app',
        category: ['react.js']
    },

    {
        name: 'Movie Website Landing Page',
        image: landing,
        deployed_url: 'https://movie-website-landing-page-ashu.vercel.app/',
        github_url: 'https://github.com/Ashutosh-IT/Movie-website-landing-page-using-react-tailwind',
        category: ['react.js']
    },

    {
        name: 'Todo App',
        image: todo,
        deployed_url: '',
        github_url: 'https://github.com/Ashutosh-IT/todo-app',
        category: ['node.js']
    },

    {
        name: 'Dev Portfolio',
        image: pf,
        deployed_url: '',
        category: ['react.js']
    },

]

export default dataProjects;