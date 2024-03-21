import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;

    const userStyle={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'20px'

    }
    const navigate=useNavigate()
    const handleShowDetails=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetails}>Click</button>
        </div>
    );
};

export default User;