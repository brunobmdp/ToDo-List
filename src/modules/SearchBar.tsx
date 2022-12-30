import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from './SearchBar.module.css';


interface PropsSearchBar {

  onAddTask: (content: string) => void;
}

export function SearchBar({ onAddTask }: PropsSearchBar) {
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onAddTask(newTaskContent)
    setNewTaskContent('');
  }

  return (
    <form onSubmit={handleCreateNewTask}>
      <div className={styles.searchBar}>
        <input
          value={newTaskContent}
          placeholder="Adicione uma nova tarefa"
          type='text'
          onChange={handleNewTaskContent}
          required
        />
        <button type="submit">
          <p>Criar</p>
          <PlusCircle size={20} />
        </button>
      </div>
    </form>
  );
}