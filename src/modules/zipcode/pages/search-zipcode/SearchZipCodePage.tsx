import { useState } from "react";
import ZipCodeForm from "../../components/ZipCodeForm";
import { fetchAddressByZipCode } from "../../services/ZipCodeService";
import { IAddress } from "../../types/ZipCodeTypes";

const SearchZipCodePage = () => {
  const [address, setAddress] = useState<IAddress | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (zipCode: string) => {
    try {
      setError("");
      const data = await fetchAddressByZipCode(zipCode);

      if (!data || !data.cep) {
        setError("Endereço não encontrado para o CEP informado.");
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Ocorreu um erro ao buscar o CEP.");
      } else {
        setError("Ocorreu um erro desconhecido ao buscar o CEP.");
      }
      setAddress(null);
    }
  };

  return (
    <div>
      <h1>Buscar Endereço por CEP</h1>
      <ZipCodeForm onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {address && (
        <div>
          <h2>Endereço:</h2>
          <ul>
            {Object.entries(address).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value || ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchZipCodePage;
