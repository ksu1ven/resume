import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<main>adsfg</main>} />
            </Route>
            <Route path="*" element={<main>adsfg</main>} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
