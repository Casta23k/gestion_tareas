import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Task } from "../Types/Task";
import "../Styles/styles.css";

type Props = {
  show: boolean;
  onHide: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
};

const TaskFormModal: React.FC<Props> = ({ show, onHide, onSave, task }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [status, setStatus] = useState(task ? task.status : "Pendiente");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("El título es obligatorio");

    onSave({ id: task?.id || Date.now(), title, description, status });
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Editar Tarea" : "Nueva Tarea"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "Pendiente" | "Completado")
              }
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Completado">Completado</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskFormModal;
