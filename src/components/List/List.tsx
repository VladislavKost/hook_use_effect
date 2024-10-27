import { useEffect, useState } from "react";
import { Details } from "../Details";
import "./List.css";

export const List = () => {
  const [listData, setListData] = useState<Array<{ id: number; name: string }>>(
    []
  );
  const [currentItem, setCurrentItem] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );
      const data = await res.json();
      setListData(data);
    };
    fetchData();
  }, []);
  const handleClickItem = (item: { id: number; name: string }) => {
    setCurrentItem(item);
  };

  return (
    <div className="list-details">
      <div className="list">
        {listData.map((item) => (
          <div
            className={`list-item ${
              currentItem && currentItem.id === item.id ? "active" : ""
            }`}
            key={item.id}
            onClick={() => handleClickItem(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="details">
        {currentItem && <Details id={currentItem.id} />}
      </div>
    </div>
  );
};
