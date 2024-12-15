import './index.css';
import { IMenuItem } from './structure';

const menuItems: IMenuItem[] = [
  {
    name: 'Buscar Endereços',
    url: '/'
  },
  {
    name: 'Gerenciar Notícias',
    url: '/news'
  },
];

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <img src="/logo.png" alt="logo-g4f" className="header-logo"/>
        </div>
        <div className="menu">
          <ul className="menu-list">
            {menuItems.map((item: IMenuItem, index: number) => (
              <li key={`${item.name}_${index}`} className="menu-item">
                <a href={item.url} className="menu-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
