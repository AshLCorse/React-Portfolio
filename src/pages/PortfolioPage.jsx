import { useState, useEffect } from "react";
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from "react-router-dom";
import projects from "../utils/projects.const.jsx";
import ProjectCard from "../components/UI/ProjectCard/ProjectCard";
import ListItem from "../components/UI/ListItem";

export default function PortfolioPage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  // const [projects] = useState([]);

  // console.log(projects);

  // useEffect(() => {
  //   projects;
  // }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <div project={project}>
              <ProjectCard project={project} />
              {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
              <Link
                to={project.githubLink}
                className="badge bg-primary rounded-pill"
              >
                Github Link
              </Link>
              <img src={project.screenshot} />
            </div>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
