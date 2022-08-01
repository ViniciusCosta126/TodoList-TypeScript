import { useState, KeyboardEvent } from "react";
import * as C from "./style";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddItem = ({ onEnter }: Props) => {
  const [inputTask, setInputTask] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputTask !== "") {
      onEnter(inputTask);
      setInputTask("");
    }
  };
  const handleClick = () => {
    if (inputTask !== "") {
      onEnter(inputTask);
      setInputTask("")
    }
  };
  return (
    <C.Container>
      <div className="image" onClick={handleClick}>
        ➕
      </div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddItem;
