import React from 'react';
import '../Dahboard/DashStyle/Dashboard.css'; // Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faUsers,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

function Dashboard() {
    // Sample Data (Replace with your actual data)
    const revenueData = [
        { month: 'Jan', revenue: 4000 },
        { month: 'Feb', revenue: 3000 },
        { month: 'Mar', revenue: 2000 },
        { month: 'Apr', revenue: 2780 },
        { month: 'May', revenue: 1890 },
        { month: 'Jun', revenue: 2390 },
        { month: 'Jul', revenue: 3490 },
    ];

    // Sample Top Selling Products data (Replace with your actual data)
    const topProducts = [
        { name: 'T-Shirt', sales: 120 },
        { name: 'Jeans', sales: 95 },
        { name: 'Hoodie', sales: 80 },
        { name: 'Dress', sales: 75 },
        { name: 'Sneakers', sales: 60 },
    ];

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>

            <div className="dashboard-metrics">
                <div className="metric-card">
                    <FontAwesomeIcon icon={faDollarSign} className="metric-icon" />
                    <div className="metric-info">
                        <span className="metric-value">$45,000</span>
                        <span className="metric-label">Total Revenue</span>
                    </div>
                </div>

                <div className="metric-card">
                    <FontAwesomeIcon icon={faShoppingBag} className="metric-icon" />
                    <div className="metric-info">
                        <span className="metric-value">1,250</span>
                        <span className="metric-label">Total Orders</span>
                    </div>
                </div>

                <div className="metric-card">
                    <FontAwesomeIcon icon={faUsers} className="metric-icon" />
                    <div className="metric-info">
                        <span className="metric-value">850</span>
                        <span className="metric-label">Customers</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-charts">
                <div className="chart-container">
                    <h3>Monthly Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-container">
                    <h3>Top Selling Products</h3>
                    <ul>
                        {topProducts.map((product) => (
                            <li key={product.name} className="top-product-item">
                                <span>{product.name}</span>
                                <span>{product.sales}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;