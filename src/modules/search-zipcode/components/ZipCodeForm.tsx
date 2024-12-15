import { useState } from 'react';

type ZipCodeFormProps = {
  onSearch: (zipCode: string) => void;
};

const ZipCodeForm = ({ onSearch }: ZipCodeFormProps) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (zipCode.trim() === '') {
      alert('Por favor, insira um CEP válido.');
      return;
    }
    onSearch(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="zipCode">CEP:</label>
      <input
        id="zipCode"
        name="zipCode"
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button data-cy="submit-zipcode" type="submit">Buscar</button>
    </form>
  );
};

export default ZipCodeForm;
