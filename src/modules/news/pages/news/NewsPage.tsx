import React, { useEffect, useState } from "react";
import { News } from "../../types/NewsTypes";
import {
  createNews,
  deleteNews,
  getNews,
  updateNews,
} from "../../services/NewsService";
import NewsForm from "../../components/NewsForm";
import "./index.css";
import Button from "../../../../components/Button";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const data = await getNews();
    setNews(data);
  };

  const handleCreate = async (data: { title: string; description: string }) => {
    await createNews(data);
    setIsCreating(false);
    fetchNews();
  };

  const handleUpdate = async (
    id: number,
    data: { title: string; description: string }
  ) => {
    await updateNews(id, data);
    setEditingId(null);
    fetchNews();
  };

  const handleDelete = async (id: number) => {
    await deleteNews(id);
    fetchNews();
  };

  return (
    <div className="news-page-container">
      <div className="news-page-header">
        <h1 className="news-page-title">Gerenciador de Notícias</h1>

        <Button
          type="button"
          onClick={() => setIsCreating(true)}
          dataCy="create-news"
        >
          Criar Nova Notícia
        </Button>
      </div>

      {isCreating && (
        <div className="news-page-section">
          <h2 className="news-page-section-subtitle">Criar Notícia</h2>
          <NewsForm
            onSubmit={handleCreate}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      <h1 className="news-page-subtitle">Lista de Notícias Cadastradas </h1>

      <ul className="news-page-list">
        {news.length > 0 ? (
          news.map((item) => (
            <li key={item.id} className="news-page-list-item">
              {editingId === item.id ? (
                <NewsForm
                  initialData={{
                    title: item.title,
                    description: item.description,
                  }}
                  onSubmit={(data) => handleUpdate(item.id, data)}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <>
                  <h2 className="news-page-list-item-title">{item.title}</h2>
                  <p className="news-page-list-item-description">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    onClick={() => setEditingId(item.id)}
                    dataCy="edit-news"
                  >
                    Editar
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    dataCy="delete-news"
                  >
                    Deletar
                  </Button>
                </>
              )}
            </li>
          ))
        ) : (
          <p>Sem notícias disponíveis.</p>
        )}
      </ul>
    </div>
  );
};

export default NewsPage;
