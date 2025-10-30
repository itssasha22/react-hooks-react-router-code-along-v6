import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then(r => r.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <article>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </article>
  );
}

export default UserDetails;
