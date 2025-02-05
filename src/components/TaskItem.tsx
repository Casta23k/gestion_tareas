import React from "react";
import { Task } from "../Types/Task";

type Props = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
};

const TaskItem: React.FC<Props> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <span className={`badge ${task.status === "Pendiente" ? "bg-warning" : "bg-success"}`}>
          {task.status}
        </span>
        <div className="mt-2">
          <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(task)}>
            Editar
          </button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
