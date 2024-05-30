const User = require('../../models/User');
const Event = require('../../models/Events');
const Course = require('../../models/Courses');
const CourseEnrollment = require('../../models/CourseEnrollment');
const Report = require('../../models/Report');


const getDashboardData = async (req, res) => {
    try {
        // Récupérer les données d'aujourd'hui
        const totalUsersToday = await User.countDocuments();
        const totalCoursesToday = await Course.countDocuments();
        const totalEventsToday = await Event.countDocuments();
        const courseEnrollmentsToday = await CourseEnrollment.countDocuments();
        
        // Calculer la date d'il y a 30 jours
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Récupérer les rapports par jour des 30 derniers jours
        const reportsPerDayLast30Days = await Report.aggregate([
            {
                $match: { createdAt: { $gte: thirtyDaysAgo } } // Filtrer par les rapports des 30 derniers jours
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } // Grouper par jour de création
                    },
                    count: { $sum: 1 } // Compter le nombre de rapports pour chaque jour
                }
            }
        ]);

        // Formatage des rapports par jour pour les 30 derniers jours
        const formattedReportsPerDayLast30Days = reportsPerDayLast30Days.map(report => ({
            name: report._id,
            value: report.count
        }));

        // Récupérer les rapports par jour pour aujourd'hui
        const reportsPerDayToday = await Report.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } // Grouper par jour de création
                    },
                    count: { $sum: 1 } // Compter le nombre de rapports pour chaque jour
                }
            }
        ]);

        // Formatage des rapports par jour pour aujourd'hui
        const formattedReportsPerDay = reportsPerDayToday.map(report => ({
            name: report._id, // Utilisez la date comme nom
            value: report.count // Utilisez le nombre de rapports comme valeur
        }));

        // Calculer la date d'hier
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        // Récupérer les données d'hier
        const totalUsersYesterday = await User.countDocuments({ createdAt: { $lte: yesterday } });
        const totalCoursesYesterday = await Course.countDocuments({ createdAt: { $lte: yesterday } });
        const totalEventsYesterday = await Event.countDocuments({ createdAt: { $lte: yesterday } });
        const courseEnrollmentsYesterday = await CourseEnrollment.countDocuments({ createdAt: { $lte: yesterday } });

        // Récupérer les rapports par jour pour hier
        const reportsPerDayYesterday = await Report.aggregate([
            {
                $match: { createdAt: { $lte: yesterday } } // Filtrer par les rapports d'hier
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } // Grouper par jour de création
                    },
                    count: { $sum: 1 } // Compter le nombre de rapports pour chaque jour
                }
            }
        ]);

        // Formatage des rapports par jour pour hier (similaire à aujourd'hui)
        const formattedReportsPerDayYesterday = reportsPerDayYesterday.map(report => ({
            name: report._id,
            value: report.count
        }));

        // Calculer les changements
        const calculateChange = (today, yesterday) => {
            if (yesterday === 0 && today === 0) {
                return { change: 'N/A', changeText: 'No data from yesterday' };
            }
            
            let change;
            let changeText;

            if (today === 0) {
                change = -100; // Down from yesterday
                changeText = 'Down from yesterday';
            } else if (yesterday === 0) {
                change = 100; // Up from no data yesterday
                changeText = 'Up from no data yesterday';
            } else {
                change = ((today - yesterday) / yesterday) * 100;
                changeText = change > 0 ? 'Up from yesterday' : 'Down from yesterday';
            }

            return { change: change.toFixed(2), changeText };
        };

        // Incorporer les données calculées dans le tableau de bord
        const dashboardData = {
            totalUsers: {
                value: totalUsersToday,
                ...calculateChange(totalUsersToday, totalUsersYesterday)
            },
            totalCourses: {
                value: totalCoursesToday,
                ...calculateChange(totalCoursesToday, totalCoursesYesterday)
            },
            totalEvents: {
                value: totalEventsToday,
                ...calculateChange(totalEventsToday, totalEventsYesterday)
            },
            courseEnrollments: {
                value: courseEnrollmentsToday,
                ...calculateChange(courseEnrollmentsToday, courseEnrollmentsYesterday)
            },
            reportsPerDay: {
                value : formattedReportsPerDay, // Utilisez les données formatées
                ...calculateChange(reportsPerDayToday.length, reportsPerDayYesterday.length)
            },
            reportsPerDayLast30Days: {
                value: formattedReportsPerDayLast30Days,
                // Calculer le changement par rapport à la période précédente (30 jours)
                ...calculateChange(formattedReportsPerDayLast30Days.length, formattedReportsPerDayYesterday.length)
            }
        };

        res.json(dashboardData);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getDashboardData
};
