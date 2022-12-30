
import { useState } from 'react';
import { Task } from '../dtos/Task';
import { EmptyTasks } from './EmptyTasks';
import { TaskComponent } from './TaskComponent';
import styles from './Tasks.module.css';

interface TasksProps {
  taskList: Task[];
  taskCount: number;
  completedTaskCount: number;
  onDeleteTask: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}

export function Tasks({
  completedTaskCount,
  taskCount,
  taskList,
  onDeleteTask,
  onUpdateStatus
}: TasksProps) {

  return (
    <div className={styles.tasks}>
      <header >
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>{taskCount}</span>
        </div>
        <div className={styles.tasksConcluded}>
          <strong>Concluídas</strong>
          {
            taskCount < 1 ?
              <span>{taskCount}</span> :
              <span>{completedTaskCount} de {taskCount}</span>
          }
        </div>
      </header>
      <div>
        {

          taskList.length > 0 ?
            <TaskComponent
              onDeleteTask={onDeleteTask}
              taskList={taskList}
              onUpdateStatus={onUpdateStatus}
            /> :
            <EmptyTasks />
        }

      </div>
    </div>
  );
}