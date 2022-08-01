import * as C from "./styles/App.styles";
import { useState } from "react";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

function App() {
  const [itens, setItens] = useState<Item[]>([
    { id: 1, name: "Criar novo codigo de automacao", done: false },
    { id: 2, name: "Criar novo codigo", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...itens];
    newList.push({
      id: itens.length + 1,
      name: taskName,
      done: false,
    });
    setItens(newList);
  };
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...itens];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setItens(newList);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>TodoList | React + Typescript</C.Header>
        <AddItem onEnter={handleAddTask}/>
        {itens.map((item, index) => {
          return <ListItem item={item} key={index} onChange={handleTaskChange}/>;
        })}
      </C.Area>
    </C.Container>
  );
}

export default App;
