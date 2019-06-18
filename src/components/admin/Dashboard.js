import React from 'react';
import AdminLayout from '../HOC/AdminLayout';

function Dashboard() {
    return (
        <AdminLayout>
            <div className='user_dashboard'> 
                This is your Dashboard.
            </div>
        </AdminLayout>
    )
}

export default Dashboard;