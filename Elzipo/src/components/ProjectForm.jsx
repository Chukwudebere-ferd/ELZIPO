import React, { useState, useEffect } from "react";
import { addProject, updateProject } from "../services/projectService";
import "./projectForm.css";

const ProjectForm = ({ project, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        link: project.link,
      });
    }
  }, [project]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!formData.title || !formData.description || !formData.link) {
        throw new Error("Please fill in all required fields");
      }

      const projectData = {
        title: formData.title,
        description: formData.description,
        link: formData.link,
      };

      if (project) {
        await updateProject(project.id, projectData);
      } else {
        await addProject(projectData);
      }

      onSuccess();
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project ? "Edit Project" : "Add New Project"}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Project title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="link">
              Link <span className="required">*</span>
            </label>
            <input
              id="link"
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Short description"
              rows="3"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
