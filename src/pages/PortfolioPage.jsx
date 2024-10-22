import { useState, useEffect } from "react";
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from "react-router-dom";
import Project from "../components/UI/ProjectSections/ProjectTeaser";
import ListItem from "../components/UI/ListItem";

export default function PortfolioPage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  const [project] = useState([]);

  useEffect(() => {
    project;
  }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {project.map((project) => (
          <ListItem key={project.id}>
            <Project user={project} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            <Link
              to={`/project/${project.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
