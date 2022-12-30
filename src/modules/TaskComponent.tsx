import { Task } from '../dtos/Task';
import { TaskModel } from './TaskModel';

interface TasksProps {
  taskList: Task[];
  onDeleteTask: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}


export function TaskComponent({ taskList, onDeleteTask, onUpdateStatus }: TasksProps) {
  return (
    <div>
      {taskList.map(task => {
        return (
          <TaskModel
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateStatus={onUpdateStatus}
          />
        );
      })}
    </div>
  );
}