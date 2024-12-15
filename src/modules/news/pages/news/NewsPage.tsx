import React, { useEffect, useState } from "react";
import { News } from "../../types/NewsTypes";
import {
  createNews,
  deleteNews,
  getNews,
  updateNews,
} from "../../services/NewsService";
import NewsForm from "../../components/NewsForm";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [isCreating, setIsCreating] = useState(false);

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

  const handleUpdate = async (data: { title: string; description: string }) => {
    if (editingNews) {
      await updateNews(editingNews.id, data);
      setEditingNews(null);
      fetchNews();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteNews(id);
    fetchNews();
  };

  return (
    <div>
      <h1>Lista de Notícias</h1>

      <button onClick={() => setIsCreating(true)}>Criar Nova Notícia</button>

      {isCreating && (
        <div>
          <h2>Criar Notícia</h2>
          <NewsForm
            onSubmit={handleCreate}
            initialData={{ title: "", description: "" }}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      {editingNews && (
        <div>
          <h2>Editar Notícia</h2>
          <NewsForm
            onSubmit={handleUpdate}
            initialData={{
              title: editingNews.title,
              description: editingNews.description,
            }}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      <ul>
        {news.length > 0 ? (
          news.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button data-cy="edit-news"onClick={() => setEditingNews(item)}>Editar</button>
              <button data-cy="delete-news" onClick={() => handleDelete(item.id)}>Deletar</button>
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
