
import Header from './Header';
import DashboardCard from './DashboardCard';
import Chart from './Chart';
import { FaUser, FaBox, FaCalendar } from 'react-icons/fa';
import { TbChartLine } from "react-icons/tb";
import '../../styles/Admin/_Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <main>
                <div className="main-content">
                    <div className="dashboard-content">
                        <div className="cards">
                            <DashboardCard
                                title="Total Users"
                                value="689"
                                icon={<FaUser />}
                                change={8.5}
                                changeText="Up from yesterday"
                            />
                            <DashboardCard
                                title="Total Courses"
                                value="28"
                                icon={<FaBox />}
                                change={0.5}
                                changeText="Up from yesterday"
                            />
                            <DashboardCard
                                title="Course Enrollment"
                                value="900"
                                icon={<TbChartLine  />}
                                change={-4.3}
                                changeText="Down from yesterday"
                            />
                            <DashboardCard
                                title="Total Events"
                                value="900"
                                icon={<FaCalendar />}
                                change={-4.3}
                                changeText="Down from yesterday"
                            />

                            <DashboardCard
                                title="Reports per day"
                                value="9"
                                icon={<FaCalendar />}
                                change={5}
                                changeText="Down from yesterday"
                            />
                        </div>
                        <Chart />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
