import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData()
const navigate=useNavigate()
const params=useParams()

const handleShowBack=()=>{
    navigate(-1)
}

    const {name,phone}=user
    return (
        <div>
            <p>name: {name}</p>
            <p>phone:{phone}</p>
            <button onClick={handleShowBack}>Go back</button>
        </div>
    );
};

export default UserDetails;