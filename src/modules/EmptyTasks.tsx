import styles from './EmptyTasks.module.css';
import clipboard from '../assets/Clipboard.svg';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTask}>
      <img src={clipboard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}