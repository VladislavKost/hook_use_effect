import { useEffect, useState } from "react";
import "./Details.css";

export const Details = ({ id }: { id: number }) => {
  const [details, setDetails] = useState<{
    id: number;
    avatar: string;
    details: { city: string; company: string; position: string };
    name: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      );
      const data = await res.json();
      setDetails(data);
    };
    fetchData();
  }, [id]);
  const avatarUrl = details ? `${details.avatar}?t=${Date.now()}` : "";

  return (
    <div className="details-item">
      <img src={avatarUrl} alt="avatar" />
      <h2>{details?.name}</h2>
      <p>City: {details?.details.city}</p>
      <p>Company: {details?.details.company}</p>
      <p>Position: {details?.details.position}</p>
    </div>
  );
};
