import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <h2>OOps!!!</h2>
            <p>{error.statusText|| error.message}</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;