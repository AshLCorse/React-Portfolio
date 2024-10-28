// This is a static page "Resue=me" section
import Resume from "../utils/images/Tech-Resume-9_10_24.png";

export default function ResumePage() {
  return (
    <div>
      <h2>Resume</h2>
      <img src={Resume} alt="Ashleigh Corse's Resume" />
      <ul>
        <li>
          <a href="https://github.com/AshLCorse">My Github Profile</a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/ash-corse-2852a1126">
            My LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
