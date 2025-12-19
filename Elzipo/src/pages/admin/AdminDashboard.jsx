import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../../services/authService';
import { getAllProjects, deleteProject } from '../../services/projectService';
import ProjectForm from '../../components/ProjectForm';
import './admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/admin/login');
    } else {
      setUser(currentUser);
      fetchProjects();
    }
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      setMessage('Error loading projects: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      setMessage('Error logging out: ' + error.message);
    }
  };

  const handleDelete = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(projectId);
        setProjects(projects.filter((p) => p.id !== projectId));
        setMessage('Project deleted successfully!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        setMessage('Error deleting project: ' + error.message);
      }
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  const handleFormSuccess = () => {
    handleFormClose();
    fetchProjects();
    setMessage('Project saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) {
    return <div className="admin-container"><p>Loading...</p></div>;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <span className="user-info">{user?.email}</span>
          <button onClick={() => setShowForm(true)} className="btn-primary">
            + Add Project
          </button>
          <button onClick={handleLogout} className="btn-secondary">
            Logout
          </button>
        </div>
      </div>

      {message && <div className="message">{message}</div>}

      {showForm && (
        <ProjectForm
          project={editingProject}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}

      <div className="projects-table-container">
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Click "Add Project" to create one.</p>
        ) : (
          <table className="projects-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Resources</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.description?.substring(0, 50)}...</td>
                  <td>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </td>
                  <td>{project.resources?.join(', ')}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEditingProject(project);
                        setShowForm(true);
                      }}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
