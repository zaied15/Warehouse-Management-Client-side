import React from "react";
import useCars from "../../hooks/useCars";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [cars] = useCars();
  return (
    <div>
      <h2 className="text-center my-5">Manage Your inventory</h2>
      <div className="d-flex flex-column">
        {cars.map((car) => (
          <ManageInventory key={car._id} car={car}></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
