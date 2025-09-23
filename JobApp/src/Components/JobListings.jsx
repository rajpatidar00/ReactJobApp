import React, { useEffect, useState } from "react";
import JobListing from "../Components/JobListing";

import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function JobListings({ isHome }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const filteredJobs = isHome ? jobs.slice(0, 3) : jobs;

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent jobs" : "Browse jobs"}
        </h2>
        {/* <!-- Job Listing 1 --> */}
        {loading ? (
          <div className="flex items-center justify-center">
            <ClipLoader
              color="#4F46E5"
              loading={loading}
              cssOverride={override}
              size={150}
            />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
