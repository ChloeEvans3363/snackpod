import { useNavigate } from "react-router-dom";

export function Profile() {
  //const { signOut } = useAuthenticator();
  const navigate = useNavigate();
  return (
    <>
      <h1>Profile Page</h1>

      <button onClick={() => navigate("/")}>Go to Feed</button>
    </>
  );
}

export default Profile;
