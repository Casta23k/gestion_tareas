import React from "react";
import { Task } from "../Types/Task";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  filter: string;
};


const TaskList: React.FC<Props> = ({ tasks, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pendiente") return task.status === "Pendiente";
    if (filter === "Completado") return task.status === "Completado";
    return true; 
  });

  return (
    <div className="w-100">
      {filteredTasks.length > 0 ? (
        <ul className="list-group">
          {filteredTasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <span className={`badge ${task.status === "Completado" ? "bg-success" : "bg-warning"}`}>
                {task.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default TaskList;
