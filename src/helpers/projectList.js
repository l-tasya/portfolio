
import project01 from '../img/projects/01.png';
import project01Big from '../img/projects/01-big.png';
import project02 from '../img/projects/02.png';
import project02Big from '../img/projects/02-big.png';
import project03 from '../img/projects/03.png';
import project03Big from '../img/projects/03-big.png';

export const projects = [
    {
        id: 1,
        title: "TodoList",
        description: '...',
        skills: ['React','Redux Toolkit', 'Material UI', 'StoryBook'],
        img: {
            small: project01,
            big: project01Big,
        },
        ghLink: 'https://github.com/l-tasya/todolist',
    },
    {
        id: 2,
        title: "SN",
        description: '...',
        skills: ['React','Redux', 'React Router Dom v6','Styled Components'],
        img: {
            small: project02,
            big: project02Big,
        },
        ghLink: 'https://github.com/l-tasya/remember_rct',
    },
    {
        id: 3,
        title: "Expenses",
        description: '...',
        skills: ['React','React Native', 'React Navigation',],
        img: {
            small: project03,
            big: project03Big,
        },
        ghLink: 'https://github.com/l-tasya/expenses',
    },

]
