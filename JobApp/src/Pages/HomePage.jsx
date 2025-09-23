import React from "react";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";

// import Hero from "./Components/Hero";
// import HomeCards from "./Components/HomeCards";
// import JobListings from "./Components/JobListings";
// import Navbar from "./Components/Navbar";
// import ViewAllJobs from "./Components/ViewAllJobs";

function HomePage() {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </div>
  );
}

export default HomePage;
