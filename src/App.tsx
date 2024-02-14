import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { About } from './components/pages/About/About';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<About />} />
            </Route>
            <Route path="*" element={<main>Error</main>} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
