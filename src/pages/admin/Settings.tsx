
import { Helmet } from 'react-helmet-async';

const Settings = () => {
    return (
        <>
            <Helmet>
                <title>Settings | QORB Admin</title>
            </Helmet>

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500">Manage your application settings.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <p>Settings interface coming soon.</p>
            </div>
        </>
    );
};

export default Settings;
