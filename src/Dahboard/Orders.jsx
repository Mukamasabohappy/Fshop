import React, { useState, useEffect } from 'react';
import { FaUsers, FaShoppingCart, FaCalendarAlt, FaDollarSign, FaTruck, FaTshirt, FaSortNumericUp } from 'react-icons/fa'; // Import new icon for quantity
import '../Dahboard/DashStyle/Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulated orders data (replace with actual API call)
    const initialOrders = [
      { id: 1, customerName: 'Alice Smith', clothName: 'Red Dress', quantity: 2, orderDate: '2024-01-15', totalAmount: 79.98, status: 'Shipped' },
      { id: 2, customerName: 'Bob Johnson', clothName: 'Blue Jacket', quantity: 1, orderDate: '2024-01-20', totalAmount: 125.50, status: 'Delivered' },
      { id: 3, customerName: 'Charlie Brown', clothName: 'Black T-Shirt', quantity: 3, orderDate: '2024-01-25', totalAmount: 49.99, status: 'Pending' },
    ];

    setOrders(initialOrders);
  }, []);

  return (
    <div className="orders-container">
      <h2 className="orders-title">Recent Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th><FaShoppingCart className="table-header-icon" /> Order ID</th>
            <th><FaUsers className="table-header-icon" /> Customer Name</th>
            <th><FaTshirt className="table-header-icon" /> Cloth Name</th>
            <th><FaSortNumericUp className="table-header-icon" /> Quantity</th> {/* New column */}
            <th><FaCalendarAlt className="table-header-icon" /> Order Date</th>
            <th><FaDollarSign className="table-header-icon" /> Total Amount</th>
            <th><FaTruck className="table-header-icon" /> Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.clothName}</td>
              <td>{order.quantity}</td> {/* New quantity column */}
              <td>{order.orderDate}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <button className="orders-view-button">View</button>
                <button className="orders-edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
