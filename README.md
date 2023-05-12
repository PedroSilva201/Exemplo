## React TS - Hooks

Neste exemplo, as propriedades `nome` e `idade` são propagadas pela árvore de componentes usando hooks.

A versão deste código usando context está disponível em [rect-context](https://github.com/arleysouza/react-context).

As propriedades `nome` e `idade` fazem parte do `state` do componente Provider:
```
function Provider({ children }: any) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <Contexto.Provider value={{ nome, idade, setNome, setIdade }}>
      {children}
    </Contexto.Provider>
  );
}
```


### Instruções de uso

Baixar o projeto na pasta `front` do seu computador:
```
git clone https://github.com/arleysouza/react-hooks.git front
```
Instalar as dependências:
```
cd front
npm i
```
A aplicação estará na porta 3010. Comando para subir a aplicação:
```
npm start
```
