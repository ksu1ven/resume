import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import { Layout } from '@layout/Layout';
import { About } from '@pages/About/About';
import { Education } from '@pages/Education/Education';
import { Portfolio } from '@pages/Portfolio/Portfolio';
import { Skills } from '@pages/Skills/Skills';
import { Experience } from '@pages/Experience/Experience';
import { ByeBye } from '@pages/ByeBye/ByeBye';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="skills" element={<Skills />} />
                <Route path="experience" element={<Experience />} />
                <Route path="bye-bye" element={<ByeBye />} />
            </Route>
            <Route path="*" element={<main>Error</main>} />
        </>
    )
);

function App() {
    return (
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    );
}

export default App;
