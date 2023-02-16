import './App.css';
import EnvioForm from './Components/EvnForms';

function App() {
  return (
    <body>

        <header>
          <h1>Inicio de tudo</h1>
        </header>

        <form class="forms" >
          <label>Nome: </label>
          <input type="text" placeholder="Digite seu nome" name="nome"/>
          <EnvioForm />
        </form>

    </body>
  );
}

export default App;
