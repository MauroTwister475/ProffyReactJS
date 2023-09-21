import { useState, useEffect } from "react";
import { api } from "../../api";
import heartIcon from "../../assets/heart.svg";

export function TotalConections() {
  const [conections, setConections] = useState(0);

  useEffect(() => {
    async function getTotalConections() {
      const response = await api.get('/conections');
      setConections(response.data);
    }
    getTotalConections();
  }, []);

  return (
    <span className="flex gap-2 text-[1.4rem] text-text_shape">
      Total de {conections} conexões já realizadas
      <img src={heartIcon} alt="heart" />
    </span>
  )
}
