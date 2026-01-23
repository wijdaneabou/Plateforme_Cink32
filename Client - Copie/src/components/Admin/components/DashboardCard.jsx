import PropTypes from 'prop-types';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import '../styles/_DashboardCard.scss';

const DashboardCard = ({ title, value, icon, change, changeText }) => {
    const changeClass = change < 0 || change >= 0 ? 'positive' : 'negative';

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
                {change === 'N/A' ? change : (change >= 0 ? <RiArrowUpLine /> : <RiArrowDownLine />)} {change === 'N/A' ? '' : `${Math.abs(change)}%`} {changeText}
            </div>
        </div>
    );
};

DashboardCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element.isRequired,
    change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    changeText: PropTypes.string.isRequired,
};

export default DashboardCard;
