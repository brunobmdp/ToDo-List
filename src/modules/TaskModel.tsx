import { Trash } from 'phosphor-react';
import { Task } from '../dtos/Task';
import styles from './TaskModel.module.css'

interface taskModelProps {
  task: Task
  onDeleteTask: (id: string) => void
  onUpdateStatus: (id: string) => void

}

export function TaskModel({ task, onDeleteTask, onUpdateStatus }: taskModelProps) {

  function handleChangeTaskStatus() {
    onUpdateStatus(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    < div className={styles.taskComponent} >
      <label className={styles.customCheckbox}>
        <input className={styles.checkbox} type="checkbox" checked={task.isCompleted} onChange={handleChangeTaskStatus} />
        <span className={styles.checkmark}></span>
      </label>

      <p className={task.isCompleted ? styles.checkedText : styles.uncheckedText}>
        {task.content}
      </p>

      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div >
  );
}