import React from "react";
import Navbar from "./Navbar.js";
import "../styles/resumeIndex.css";

function Resume() {
  return (
    <div>
      <Navbar />
      <ResumeHtml />
    </div>
  );
}

function ResumeHtml() {
  return (
    <div className="resume-container">
      <h1>Austin_Kyeongmo Kang</h1>
      <p className="resume-privateinfo">
        900 Washington Ave SE #306, Minneapolis, MN • (612) 408-2750 •
        austinkang7777@gmail.com
      </p>
      <h2 className="resume-subtitle">OBJECTIVE</h2>
      <p className="resume-paragraph">
        Open-minded and detail-oriented third-year student majoring in Computer
        Science. Seeking an internship position to leverage my analytical and
        technical skills to contribute to company goals and needs and accelerate
        my career development in IT.
      </p>
      <h2 className="resume-subtitle">EDUCATION</h2>
      <p className="resume-paragraph">
        <strong>University of Minnesota - Twin Cities</strong>
        <span style={{ float: "right" }}>Minneapolis, MN</span>
        <br></br>
        <strong>Bachelor of Science</strong>: Computer Science
        <span style={{ float: "right" }}>May 2025</span>
      </p>
      <h2 className="resume-subtitle">RELEVANT COURSEWORK</h2>
      <p className="resume-paragraph" style={{ marginTop: "20px" }}>
        <span style={{ marginLeft: "40px" }}>
          <b>•</b>
          <span style={{ marginLeft: "10px" }}>
            Data Structures and Software Design
          </span>
        </span>
        <span style={{ marginLeft: "160px" }}>
          <b>•</b>
          <span style={{ marginLeft: "10px" }}>
            Advanced Programming Principles
          </span>
        </span>
        <br></br>
        <span style={{ marginLeft: "40px" }}>
          <b>•</b>
          <span style={{ marginLeft: "10px" }}>
            Discrete Computational Structures
          </span>
        </span>
        <span style={{ marginLeft: "178px" }}>
          <b>•</b>
          <span style={{ marginLeft: "15px" }}>Linear Algebra</span>
        </span>
        <br></br>
        <span style={{ marginLeft: "40px" }}>
          <b>•</b>
          <span style={{ marginLeft: "10px" }}>
            Object-Oriented Programming
          </span>
        </span>
        <span style={{ marginLeft: "206.5px" }}>
          <b>•</b>
          <span style={{ marginLeft: "10px" }}>
            Algorithm and Data Structures
          </span>
        </span>
      </p>
      <h2 className="resume-subtitle">TECHNICAL SKILLS</h2>
      <p className="resume-paragraph">
        <strong>Programming Language: </strong>C, Java, JavaScript, Python,
        HTML, CSS
        <br></br>
        <strong>Frameworks / Tools: </strong>Node.js, Express.js, Linux/Ubuntu,
        MongoDB, Bootstrap, GitHub, MS Excel
      </p>
      <h2 className="resume-subtitle">WORK EXPERIENCE</h2>
      <p className="resume-paragraph">
        <strong>Trippian</strong>
        <span style={{ float: "right" }}>Santa Clara, CA</span>
        <br></br>
        <strong>Backend Development Intern</strong>
        <span style={{ float: "right" }}>Sep 2022 - Dec 2022</span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Strengthened the company’s CMS part with experienced developers.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Improved problem-solving skills by joining backend projects.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Engaged in a marketing team to share development knowledges for
          communication.
        </span>

        <br></br>
        <br></br>
        <strong>Atom Tech Solution</strong>
        <span style={{ float: "right" }}>Berkeley, CA</span>
        <br></br>
        <strong>Web Development Intern</strong>
        <span style={{ float: "right" }}>May 2022 - Aug 2022</span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Developed interactions and functions between each web page with the
          express engine.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Built login, logout, and register functions with passport API based on
          node.js.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Led an intern group to complete weekly assignments.
        </span>

        <br></br>
        <br></br>
        <strong>Iowa State University</strong>
        <span style={{ float: "right" }}>Ames, IA</span>
        <br></br>
        <strong>
          Teaching Assistant (COM S 227: Object Oriented Programming)
        </strong>
        <span style={{ float: "right" }}>Aug 2022 - Dec 2022</span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Developed interpersonal abilities through direct engagement with
          students in a classroom setting.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Evaluated code through the assessment of student assignments.
        </span>

        <br></br>
        <br></br>
        <strong>Iowa State University</strong>
        <span style={{ float: "right" }}>Ames, IA</span>
        <br></br>
        <strong>
          Teaching Assistant (COM S 127: Introduction to Computer Programming)
        </strong>
        <span style={{ float: "right" }}>Aug 2021 - Dec 2021</span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Assisted the professor by grading assignments and exams.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Cooperated with other teaching assistants to review code and proctor
          exams.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Led an intern group to complete weekly assignments.
        </span>
      </p>
      <h2 className="resume-subtitle">PROJECTS</h2>
      <p className="resume-paragraph">
        <strong>Yelp Cloning(JavaScript, HTML, CSS)</strong>
        <span style={{ float: "right" }}>Aug 2022</span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Built an already existing Yelp site by using JavaScript, HTML, and CSS
          based on node js.
        </span>
        <br></br>
        <b>•</b>
        <span style={{ marginLeft: "10px" }}>
          Designed interactions for each web page with express engine and
          restful API.
        </span>
      </p>
      <h2 className="resume-subtitle">EXTRACURRICULAR ACTIVITIES</h2>
      <p className="resume-paragraph">
        Member, ISU Computer Science Engineering Club, Ames, IA, Jan 2021 - Dec
        2022 <br></br> Co-Founder, Korean Computer Science Organization,
        Minneapolis, MN, Oct 2023 - Present
      </p>
      <br></br>
      <br></br>
    </div>
  );
}

export default Resume;
