import { useState, useEffect } from "react";
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { Link } from "react-router-dom";
import ContactMe from "../components/ContactMe";

export default function ProfilePage() {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        {/* Link to the contact page. The to prop is used in place of an href */}
        <ContactMe></ContactMe>
      </div>
      <footer className="profile-footer">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Link to="/">← Go Back</Link>
      </footer>
    </>
  );
}
