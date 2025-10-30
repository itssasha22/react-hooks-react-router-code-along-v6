import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const userList = users.map(user =>{
    return (
      <Link key={user.id} to={`/users/${user.id}`}>
        <UserCard user={user}/>
      </Link>
    );
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
};

export default Home;