import { useParams } from "react-router";

const UserDetails = () => {
  const { id,name,email } = useParams();

  return (
    <div>
      <h1>User ID: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>Email ID: {email}</h1>
    </div>
  );
};

export default UserDetails;