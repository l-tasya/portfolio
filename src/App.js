import './styles/main.scss';

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

import {Outlet, Route, Routes, useLocation} from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Projects/Project";
import ScrollToTop from "./utils/ScrollToTop";
import About from "./pages/About/About";
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1,
        display: 'flex',
        flexGrow: 1,
    },
    out: {
        opacity: 0
    }
};
const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};
const PageLayout = ({ children }) => children;
const AnimationLayout = () => {
    const {pathname} = useLocation();
    return (
        <PageLayout>
            <motion.main
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet/>
            </motion.main>
        </PageLayout>
    );
};

function App() {
    return (

        <div className="App">
            <ScrollToTop/>
            <NavBar/>

            <Routes>
                <Route element={<AnimationLayout />}>
                    <Route path='/portfolio/' element={<Home/>}/>
                    <Route path='/portfolio/about' element={<About/>}/>
                    <Route path='/portfolio/projects' element={<Projects/>}/>
                    <Route path='/portfolio/contacts' element={<Contacts/>}/>
                    <Route path='/portfolio/project/:projectID' element={<Project/>}/>
                    <Route path='*'
                           element={<div className="header__wrapper"><h1 className="header__title">404. Page Not
                               Found</h1>
                           </div>}/>
                </Route>
            </Routes>

            <Footer/>

        </div>
    );
}

export default App;
