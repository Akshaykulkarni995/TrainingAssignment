import React, { useState, useEffect } from "react";
import Data from "../../Data.json";

const SuperChildComponent = () => {
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
            {Data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.Name}</td>
                <td className="border px-4 py-2">{item.Position}</td>
                <td className="border px-4 py-2">{item.Roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuperChildComponent;
