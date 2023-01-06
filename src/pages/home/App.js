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
<input name="user" placeholder="@martvie"/>
<button>Buscar</button>

        </div>
      </div>
    </div>
  );
}

export default App;
