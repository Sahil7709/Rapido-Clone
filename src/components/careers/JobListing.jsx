// JobListing.jsx
import { jobs } from '../../data/jobs';

const JobListings = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.location} | {job.type}</p>
          <p className="mt-2 text-gray-600 text-sm">{job.description}</p>
          <a
            href={`mailto:careers@rapido.bike?subject=Application for ${job.title}`}
            className="mt-4 inline-block text-orange-500 hover:underline font-medium"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
