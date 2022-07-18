import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Book</h2>
      <p>
        &copy; {year}  {""} 
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/sanusisusi"
        >
          Sanusi Abdulkadir
        </a>
        <br/>Software Engineer (React developer)
      </p>
    </footer>
  );
}
