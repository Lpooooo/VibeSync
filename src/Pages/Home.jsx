import React, { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', deadline: '' });

  const handleAddTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: Date.now().toString(), completed: false }]);
      setNewTask({ title: '', description: '', deadline: '' });
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Gestionnaire de Projet</h1>
      </div>

      <div className="content">
        {/* Section Tâches */}
        <div className="tasks">
          <h2>
            <Calendar className="icon" />
            Gestion des Tâches
          </h2>

          <div className="task-inputs">
            <input
              type="text"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              placeholder="Titre de la tâche"
              className="input"
            />
            <textarea
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              placeholder="Description"
              className="input textarea"
            />
            <input
              type="date"
              value={newTask.deadline}
              onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
              className="input"
            />
            <button onClick={handleAddTask} className="button task-button">
              <Plus className="icon" />
              Ajouter la tâche
            </button>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-header">
                  <div className="task-info">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTaskCompletion(task.id)}
                      className="task-checkbox"
                    />
                    <h3 className={task.completed ? 'task-title completed' : 'task-title'}>{task.title}</h3>
                    <p className="task-description">{task.description}</p>
                    <p className="task-deadline">
                      Échéance: {new Date(task.deadline).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="delete-button"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lien vers la page d'ajout de photo */}
        <div className="link-to-moodboard">
          <Link to="/AddPhoto" className="link-button">Ajouter une photo via URL</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
