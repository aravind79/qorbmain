
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projects | QORB Admin</title>
            </Helmet>

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-500">Manage your portfolio projects.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <p>Project management interface coming soon.</p>
            </div>
        </>
    );
};

export default Projects;
