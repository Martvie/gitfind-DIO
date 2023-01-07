import { Header } from "../../components/header";

import background from "../../components/assets/background.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} alt="logo github para o background" className="background" />

        <div className="info">
          <div>
            <input name="user" placeholder="@martvie" />
            <button>Buscar</button>
          </div>

          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/79718740?s=400&u=a81131afdb7fd141923534501830af3a059cc4cf&v=4" className="profile-picture" alt="Foto de perfil do usuário" />

            <div>
              <h3>Nome</h3>
              <span>@fukuz</span>
              <p>Descrição</p>
            </div>

          </div>
          <hr/>
        </div>

      </div>
    </div>
  );
}

export default App;
