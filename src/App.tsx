import { Header } from './modules/Header';
import { SearchBar } from './modules/SearchBar';
import { Tasks } from './modules/Tasks';
import { v4 as uuid } from 'uuid';

import './global.css'
import { Task } from './dtos/Task';
import { useState } from 'react';


const taskList: Task[] = [
  {
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.Duis vel sed fames integer.',
    isCompleted: false
  },
  {
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.Duis vel sed fames integer.',
    isCompleted: false
  },
  {
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.Duis vel sed fames integer.',
    isCompleted: true
  },
]



export function App() {

  const [tasks, setTasks] = useState(taskList);
  const [totalTaskCount, setTotalTaskCount] = useState(tasks.length);
  const [completedTasksCount, setCompletedTasksCount] = useState(
    tasks.reduce((total, task) => task.isCompleted ? total + 1 : total, 0)
  );



  function addTask(content: string) {
    const newTask = {
      id: uuid(),
      isCompleted: false,
      content: content,
    }
    setTasks([...tasks, newTask]);
    setTotalTaskCount((total) => {
      total = tasks.length + 1;
      return total;
    });
  }

  function deleteTask(id: string) {
    const updatedTaskList = tasks.filter(task => {
      if (task.id !== id) {
        return task
      }
    });
    setTasks(updatedTaskList);
    setTotalTaskCount((total) => {
      total = tasks.length - 1;
      return total;
    });
    setCompletedTasksCount((total) => {
      total = updatedTaskList.reduce((acc, task) => task.isCompleted ? acc + 1 : acc, 0);
      return total
    });
  }

  function updateTaskStatus(id: string) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(updatedTaskList);
    setCompletedTasksCount((total) => {
      total = updatedTaskList.reduce((acc, task) => task.isCompleted ? acc + 1 : acc, 0);
      return total
    });
  }

  return (
    <div >
      <Header />
      <main>
        <SearchBar onAddTask={addTask} />
        <div>
          <Tasks
            completedTaskCount={completedTasksCount}
            taskCount={totalTaskCount}
            onDeleteTask={deleteTask}
            taskList={tasks}
            onUpdateStatus={updateTaskStatus}
          />
        </div>
      </main>
    </div>
  )
}

