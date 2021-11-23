import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from 'recharts';

export const Charts = ({ data }) => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Temperature Data</h2>
      <BarChart layout="vertical" width={1200} height={800} data={data.list}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="dt_txt" />
        <Tooltip formatter={(value) => {
          return Math.round(value);
        }} />
        <Legend />
        <Bar name="Temperature" dataKey="main.temp" fill="#9acd32" />
      </BarChart>
    </>
  )
};