import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { About } from './components/pages/About/About';
import { Education } from './components/pages/Education/Education';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<About />} />
                <Route path="education" element={<Education />} />
            </Route>
            <Route path="*" element={<main>Error</main>} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
