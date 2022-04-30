import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useCars from "../../../hooks/useCars";

const Chart = () => {
  const [cars] = useCars();
  return (
    <div>
      <div>
        <h3 className="section-title text-center my-5 fw-bold">
          <span className="d-inline-block border-bottom border-danger border-2">
            AN OVERVIEW
          </span>
        </h3>
      </div>
      <ResponsiveContainer width="95%" height={500}>
        <BarChart data={cars}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="quantity" />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
          <Bar dataKey="quantity" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
