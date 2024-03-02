import React, { useState } from 'react';
import './MathFormComponent.css'; // Create and import your CSS file for styling

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (gradeLevel: string) => void;
}

const MathFormComponent: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [gradeLevel, setGradeLevel] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(gradeLevel);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <h2>Select Grade Level</h2>
          <select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} required>
            <option value="">Select Grade Level</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            {/* Add more options as needed */}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MathFormComponent;
