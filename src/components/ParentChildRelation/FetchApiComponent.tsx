import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [items, setItems] = useState([]);

  interface Data {
    id: number;
    title: string;
    body: string;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setItems(data.slice(0, 20)))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div>
        <h3 className="text-center">Fetch Api with error boundries</h3>
      <div className="flex item-center justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Data, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchApi;
