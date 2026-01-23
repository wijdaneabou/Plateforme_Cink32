import PropTypes from 'prop-types';
import '../styles/_Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data = [] }) => { // Setting default value for data
    console.log("Données dans le composant Chart :", data);

    return (
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 0 }} >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis 
                        label={{ 
                            value: 'Total reports', 
                            angle: -90, 
                            position: 'insideLeft', 
                            dy: -10 
                        }}
                        domain={[0, 'auto']}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

Chart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    ).isRequired,
};

export default Chart;
