import React, { useState } from "react";
import "./index.css";
import Button from "../../../components/Button";

type NewsFormProps = {
  initialData?: { title: string; description: string };
  onSubmit: (data: { title: string; description: string }) => void;
  onCancel?: () => void;
};

const NewsForm: React.FC<NewsFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form className="news-form-container" onSubmit={handleSubmit}>
      <div className="news-form-field">
        <label className="news-form-label">Título</label>
        <input
          className="news-form-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="news-form-field">
        <label className="news-form-label">Descrição</label>
        <input
          className="news-form-input"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <Button type="submit" dataCy="submit-news">
        Salvar
      </Button>
      {onCancel && (
        <Button type="button" dataCy="descarte-news" onClick={onCancel}>
          Descartar
        </Button>
      )}
    </form>
  );
};

export default NewsForm;
