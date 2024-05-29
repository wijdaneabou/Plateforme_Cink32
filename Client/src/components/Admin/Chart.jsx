
import '../../styles/Admin/_Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '1', uv: 4000, pv: 2400, amt: 2400 },
    { name: '5', uv: 3000, pv: 1398, amt: 2210 },
    { name: '10', uv: 2000, pv: 9800, amt: 2290 },
    { name: '15', uv: 2780, pv: 3908, amt: 2000 },
    { name: '20', uv: 1890, pv: 4800, amt: 2181 },
    { name: '25', uv: 2390, pv: 3800, amt: 2500 },
    { name: '30', uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Total Visits', angle: -90, position: 'insideLeft', dy: -10 }}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
