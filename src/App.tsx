import React, { useState } from "react";
import "./App.css";

// Job Type Definition
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

// Hardcoded Job Data
const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000" },
  { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
  { id: 3, title: "UI/UX Designer", company: "Creative Minds", location: "Lagos", salary: "₦350,000" },
  { id: 4, title: "Data Scientist", company: "DataHub", location: "Abuja", salary: "₦500,000" },
  { id: 5, title: "Mobile App Developer", company: "AppGenius", location: "Remote", salary: "₦450,000" },
  { id: 6, title: "Cybersecurity Analyst", company: "SecureNet", location: "Port Harcourt", salary: "₦600,000" },
  { id: 7, title: "Cloud Engineer", company: "CloudBase", location: "Ibadan", salary: "₦550,000" },
  { id: 8, title: "DevOps Engineer", company: "FastTech", location: "Remote", salary: "₦500,000" },
  { id: 9, title: "System Administrator", company: "NetSystems", location: "Enugu", salary: "₦320,000" },
  { id: 10, title: "Technical Support Specialist", company: "HelpDesk Pro", location: "Lagos", salary: "₦280,000" },
  { id: 11, title: "AI Engineer", company: "AI Innovations", location: "Abuja", salary: "₦700,000" },
  { id: 12, title: "Blockchain Developer", company: "CryptoDev", location: "Remote", salary: "₦650,000" }
];

// JobCard Component
const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p>Salary: {job.salary}</p>}
    </div>
  );
};

// JobList Component
const JobList: React.FC = () => {
  return (
    <div className="job-list">
      <h1>Job Listings</h1>
      {jobs.length > 0 ? (
        <div className="job-grid">
          {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="app-container">
      <JobList />
    </div>
  );
};

export default App;
