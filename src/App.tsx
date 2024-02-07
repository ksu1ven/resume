import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<main>adsfg</main>}>
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
