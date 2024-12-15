import { useState } from "react";
import "./index.css";
import Button from "../../../components/Button";

type ZipCodeFormProps = {
  onSearch: (zipCode: string) => void;
};

const ZipCodeForm = ({ onSearch }: ZipCodeFormProps) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (zipCode.trim() === "") {
      alert("Por favor, insira um CEP válido.");
      return;
    }
    onSearch(zipCode);
  };

  const handleZipCodeChange = (value: string) => {
    const formattedValue = value.replace(/[.-]/g, "");
    setZipCode(formattedValue);
  };

  return (
    <form className="zip-code-form" onSubmit={handleSubmit}>
      <label className="zip-code-label" htmlFor="zipCode">
        CEP:
      </label>
      <div className="zip-code-content">
        <input
          className="zip-code-input"
          id="zipCode"
          name="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => handleZipCodeChange(e.target.value)}
          placeholder="Digite o CEP"
        />
        <Button
          type="submit"
          dataCy="submit-zipcode"
        >
          Buscar
        </Button>
      </div>
    </form>
  );
};

export default ZipCodeForm;
