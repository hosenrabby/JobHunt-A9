import { FaSearch, FaUserCheck, FaBriefcase } from 'react-icons/fa';

const HowWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-2xl text-blue-600" />,
      title: 'Search for a Job',
      desc: 'Browse thousands of jobs across various industries and filter based on your skills and preferences.'
    },
    {
      icon: <FaUserCheck className="text-2xl text-blue-600" />,
      title: 'Apply for a Job',
      desc: 'Create your profile and apply with a single click. Showcase your qualifications and experience easily.'
    },
    {
      icon: <FaBriefcase className="text-2xl text-blue-600" />,
      title: 'Get Hired',
      desc: 'Connect with employers, attend interviews, and land your dream job faster than ever.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">How It Works</h2>
        <p className="mb-8 text-xl text-gray-500">Follow these simple steps to get started on your journey to landing the perfect job.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
