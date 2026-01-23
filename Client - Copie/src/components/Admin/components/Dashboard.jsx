import  { useState, useEffect } from 'react';
import Header from './Header';
import DashboardCard from './DashboardCard';
import Chart from './Chart';
import { FaUser, FaBox, FaCalendar } from 'react-icons/fa';
import { TbChartLine } from "react-icons/tb";
import '../styles/_Dashboard.scss';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        totalUsers: { value: 0, change: 0, changeText: "" },
        totalCourses: { value: 0, change: 0, changeText: "" },
        courseEnrollments: { value: 0, change: 0, changeText: "" },
        totalEvents: { value: 0, change: 0, changeText: "" },
        reportsPerDay: { value: [], change: 0, changeText: "" }
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const today = new Date();
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

                const response = await fetch(`http://localhost:3000/api/dash?start-date=${thirtyDaysAgo.toISOString()}&end-date=${today.toISOString()}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Data from server:", data);
                
                // Vérifiez si data.reportsPerDay est un objet avec une clé 'value'
                const formattedReportsPerDay = Array.isArray(data.reportsPerDay.value) ? 
                    data.reportsPerDay.value :
                    []; // Si ce n'est pas un tableau, initialisez formattedReportsPerDay à un tableau vide
                
                // Mise à jour de l'état avec les données formatées
                setDashboardData(prevData => ({
                    ...prevData,
                    ...data,
                    reportsPerDay: { value: formattedReportsPerDay, change: data.reportsPerDay.change, changeText: data.reportsPerDay.changeText }
                }));

                console.log('Dashboard Data:', data); 
            } catch (error) {
                setError(error.message);
                console.error('Error fetching dashboard data:', error);
            }
        };
        
        fetchDashboardData();
    }, []);

    if (error) {
        return <div>Error fetching dashboard data: {error}</div>;
    }
    
    // Calculer le total des rapports
    const totalReports = dashboardData.reportsPerDay.value.reduce((total, report) => total + report.value, 0);

    return (
        <div className="dashboard">
            <Header />
            <main>
                <div className="main-content">
                    <div className="dashboard-content">
                        <div className="cards">
                            <DashboardCard
                                title="Total Users"
                                value={dashboardData.totalUsers.value.toString()}
                                icon={<FaUser />}
                                change={dashboardData.totalUsers.change.toString()}
                                changeText={dashboardData.totalUsers.changeText}
                            />
                            <DashboardCard
                                title="Total Courses"
                                value={dashboardData.totalCourses.value.toString()}
                                icon={<FaBox />}
                                change={dashboardData.totalCourses.change.toString()}
                                changeText={dashboardData.totalCourses.changeText}
                            />
                            <DashboardCard
                                title="Course Enrollment"
                                value={dashboardData.courseEnrollments.value.toString()}
                                icon={<TbChartLine />}
                                change={dashboardData.courseEnrollments.change.toString()}
                                changeText={dashboardData.courseEnrollments.changeText}
                            />
                            <DashboardCard
                                title="Total Events"
                                value={dashboardData.totalEvents.value.toString()}
                                icon={<FaCalendar />}
                                change={dashboardData.totalEvents.change.toString()}
                                changeText={dashboardData.totalEvents.changeText}
                            />
                            <DashboardCard
                                title="Reports Per Day"
                                value={totalReports}
                                icon={<FaCalendar />}
                                change={dashboardData.reportsPerDay.change}
                                changeText={dashboardData.reportsPerDay.changeText}
                            />
                        </div>
                        <Chart data={dashboardData.reportsPerDay.value} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
