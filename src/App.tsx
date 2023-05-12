import { useState } from "react";
import { Bloco } from "./components/Bloco";
import { Header } from "./components/Header";
import { Msg } from "./components/Msg";
import { Propriedade } from "./components/Propriedade";
import { ThemeProvider } from "styled-components";

const cores = {
  fonte: "red",
  fundo: "yellow"
};

function App() {
  const [nome,setNome] = useState("");
  const [idade,setIdade] = useState("");
  return (
    <ThemeProvider theme={cores}>
      <Header />
      <Msg>Olá Larrisa</Msg>
      <Bloco>
        <p>Novo dia!</p>
        <div>Boa tarde¹!</div>
      </Bloco>
      <Propriedade rotulo="nome" value={nome} set={setNome} />
      <Propriedade rotulo="idade" value={idade} set={setIdade} />
    </ThemeProvider>
  );
}

export default App;
