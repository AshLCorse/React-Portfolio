//TODO: take screenshots of each of my projects for class
//TODO: put screenshots in assets folder, and title each with title of project
//TODO: link screenshots in projects array 

import Screenshots from "./assets/filename";

const projects = [];

const project = {
  title: "",
  description: "",
  dependencies: [],
  technologies: [],
  githubLink: "",
  liveLink: "",
  screenshot: 
};

// Add projects here

projects.push({
  title: "Project 1",
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, nisl id consectetur pellentesque, velit sapien placerat velit, non consectetur neque enim ac lectus. Duis vel malesuada turpis. Sed tincidunt libero vel lectus facilisis, vel suscipit metus vulputate. Nulla facilisi.",
    date: "2022-01-01",
  },
  dependencies: ["React", "Bootstrap", "Tailwind CSS"],
  technologies: ["JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  githubLink: "https://github.com/username/project1",
  liveLink: "https://project1.com",
  screenshot: Screenshots.project1,
});

projects.push({
  title: "Project 2",
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, nisl id consectetur pellentesque, velit sapien placerat velit, non consectetur neque enim ac lectus. Duis vel malesuada turpis. Sed tincidunt libero vel lectus facilisis, vel suscipit metus vulputate. Nulla facilisi.",
    date: "2022-02-01",
  },
  dependencies: ["React", "Bootstrap", "Tailwind CSS"],
  technologies: ["JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  githubLink: "https://github.com/username/project2",
  liveLink: "https://project2.com",
  screenshot: Screenshots.project2,
});

// Add more projects here 

    // ...

export default projects;

// In your components where you want to display these projects, you can use something like this: 

    // ...

    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))} 
    
    // ... 
    
    // In your ProjectCard component, you can use the screenshot prop to display the image: 
    
    // ...
    
    <img src={project.screenshot} alt={project.title} />
    
    // ...

// You can add screenshots of each project in the assets folder, and reference them by their filename in the projects array. Make sure to import the screenshots in the same file where you define the projects array. 

    // ...

    import screenshots from "./assets/project1.png";
    
    // ... 
    
    const projects = [];
    
    // ...
    
    projects.push({
      // ...
      screenshot: screenshots,
    });
    
    // ... 