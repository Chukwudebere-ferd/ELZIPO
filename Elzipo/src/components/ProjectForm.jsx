import React, { useState, useEffect } from "react";
import { addProject, updateProject } from "../services/projectService";
import "./projectForm.css";

const ProjectForm = ({ project, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    resources: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        link: project.link,
        resources: project.resources?.join(", ") || "",
      });
      setImagePreview(project.image);
    }
  }, [project]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validate form
      if (!formData.title || !formData.description || !formData.link) {
        throw new Error("Please fill in all required fields");
      }

      if (!project && !imageFile) {
        throw new Error("Please upload an image");
      }

      const projectData = {
        ...formData,
        resources: formData.resources
          .split(",")
          .map((r) => r.trim())
          .filter((r) => r),
      };

      if (project) {
        // Update existing project
        await updateProject(project.id, projectData, imageFile);
      } else {
        // Add new project
        await addProject(projectData, imageFile);
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
            <label htmlFor="description">
              Description <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Project description"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="link">
              Project Link <span className="required">*</span>
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
            <label htmlFor="resources">
              Resources/Technologies
              <span className="hint">(comma-separated)</span>
            </label>
            <input
              id="resources"
              type="text"
              name="resources"
              value={formData.resources}
              onChange={handleInputChange}
              placeholder="React, Firebase, Tailwind CSS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">
              Project Image {!project && <span className="required">*</span>}
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!project}
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? "Saving..." : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
