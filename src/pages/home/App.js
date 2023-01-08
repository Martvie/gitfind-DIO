import { useState } from "react";
import { Header } from "../../components/header";
import ItemList from "../../components/intemList";

import background from "../../components/assets/background.png";

import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, login, bio } = newUser;
      setCurrentUser({ avatar_url, name, login, bio });

      const userRepos = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await userRepos.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }

    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="logo github para o background" className="background" />

        <div className="info">
          <div>
            <input name="user" placeholder="@username" value={user} onChange={event => setUser(event.target.value)} />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="profile">
                <img src={currentUser.avatar_url} className="profile-picture" alt="Foto de perfil do usuário" />

                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>

              </div>
              <hr />
            </>) : <h2> Usuário não encontrado!</h2>}

          {repos?.length ? (
            <div>
              <h4 className="repositories">Repositórios</h4>
              {repos.map( repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null}

        </div>

      </div>
    </div>
  );
}

export default App;