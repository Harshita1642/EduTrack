import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ScoreGraphs = () => {
  const data = [
    { name: "1", "Data Structures": 85, "Web Development": 78, "Database Systems": 92 },
    { name: "2", "Data Structures": 75, "Web Development": 88, "Database Systems": 85 },
    { name: "3", "Data Structures": 90, "Web Development": 82, "Database Systems": 88 },
    { name: "4", "Data Structures": 88, "Web Development": 91, "Database Systems": 84 },
  ];

  return (
    <div className="scoreGraphs" style={{ width: '100%', height: '300px' }}>
      <h2 className="text-lg font-bold mb-2">Score Statistics</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart 
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 20 }}
        >
          <XAxis 
            dataKey="name" 
            stroke="#888888"
            tickSize={5}
            padding={{ left: 10, right: 10 }}
            label={{ value: 'Tests', position: 'bottom', offset: 5 }}
          />
          <YAxis 
            stroke="#888888"
            domain={[70, 100]}
            ticks={[ 70, 80, 90, 100]}
            label={{ value: 'Marks', angle: -90, position: 'insideLeft', offset: 10 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="Data Structures" 
            stroke="#8B5CF6" // Purple
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Web Development" 
            stroke="#4C1D95" // Dark Purple
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Database Systems" 
            stroke="#2563EB" // Blue
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreGraphs;