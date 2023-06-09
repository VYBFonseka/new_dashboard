import "./SurfTemp.css";
import React, { useEffect, useState } from "react";
import { storedb } from '../../firebase-config';
import { collection,  getDocs,} from "firebase/firestore";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function ResGraph() {

  const [chartData,setChartData] = useState([]);

  const empCollectionRef = collection(storedb, "aranayake");

  useEffect(() => {
      getList();
  },[]);

  const getList = async () => {
    const data = await getDocs(empCollectionRef);
    let stats = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    let chartPoints = [];

    stats.forEach((item) => {
      let d = {
        name: item.timeSlot,
        ObjectTemperature: item.porePressure2,
      }

      chartPoints.push(d);
    })

    setChartData(chartPoints);
  };

  return (
    <LineChart
      width={1000}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="ObjectTemperature"
        stroke="#8884d8"
        activeDot={{ r: 5 }}
      />
    </LineChart>

    
  );
}