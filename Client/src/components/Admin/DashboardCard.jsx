
import PropTypes from 'prop-types';
import '../../styles/Admin/_DashboardCard.scss';

const DashboardCard = ({ title, value, icon, change, changeText }) => {
    const changeClass = change >= 0 ? 'positive' : 'negative';

    return (
        <div className="dashboard-card">
            <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="icon-container">
                    {icon}
                </div>
            </div>
            <div className="card-value">{value}</div>
            <div className={`card-change ${changeClass}`}>
                {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% {changeText}
            </div>
        </div>
    );
};

DashboardCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element.isRequired,
    change: PropTypes.number.isRequired,
    changeText: PropTypes.string.isRequired,
};

export default DashboardCard;
