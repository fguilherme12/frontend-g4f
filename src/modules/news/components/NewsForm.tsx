import React, { useState } from "react";

type NewsFormProps = {
  initialData?: { title: string; description: string };
  onSubmit: (data: { title: string; description: string }) => void;
  onCancel?: () => void;
};

const NewsForm: React.FC<NewsFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titulo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Salvar</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Descartar
        </button>
      )}
    </form>
  );
};

export default NewsForm;
