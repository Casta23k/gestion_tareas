import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskFormModal from "./components/TaskFormModal";
import { Task } from "./Types/Task";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/styles.css";  

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [filter, setFilter] = useState("all"); 

  return (
    <div className="container mt-4">
      <h2 className="text-center">Administrador de Tareas</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Agregar Nueva Tarea
      </button>
      <div className="mb-3">
        <select className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas las tareas</option>
          <option value="Pendiente">Tareas Pendientes</option>
          <option value="Completado">Tareas Finalizadas</option>
        </select>
      </div>

      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
      <TaskFormModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={(task) => {
          if (taskToEdit) {
            setTasks((prevTasks) =>
              prevTasks.map((t) => (t.id === taskToEdit.id ? task : t))
            );
          } else {

            setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
          }
          setShowModal(false);
          setTaskToEdit(null);
        }}
        task={taskToEdit}
      />
    </div>
  );
}

export default App;
