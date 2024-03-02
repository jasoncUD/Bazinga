import React, { FC, useState } from "react";
import "./LearnPage.css";

interface LearnPageProps {}

const LearnPage: FC<LearnPageProps> = () => {

const [task, setTask] = useState<string | null>(null);
const [subject, setSubject] = useState<string | null>(null);

const changeTask = (task: string) => {
  setTask(task);

const changeSubject = (subject: string) => {
  setSubject(subject);
}
}
return (
  <>
      <div className="button-container">
          <button
              className="button"
              style={{ backgroundColor: task === 'Practice' ? 'green' : 'white' }}
              onClick={() => setTask('Practice')}
          >
              Practice
          </button>
          <button
              className="button"
              style={{ backgroundColor: task === 'Take a lesson' ? 'green' : 'white' }}
              onClick={() => setTask('Take a lesson')}
          >
              Take a lesson
          </button>
          <button
              className="button"
              style={{ backgroundColor: task === 'Learn something new' ? 'green' : 'white' }}
              onClick={() => setTask('Learn something new')}
          >
              Learn something new
          </button>
      </div>
      <div className="button-container">
          <button
              className="button"
              style={{ backgroundColor: subject === 'Math' ? 'green' : 'white' }}
              onClick={() => setSubject('Math')}
          >
              Math
          </button>
          <button
              className="button"
              style={{ backgroundColor: subject === 'Science' ? 'green' : 'white' }}
              onClick={() => setSubject('Science')}
          >
              Science
          </button>
          <button
              className="button"
              style={{ backgroundColor: subject === 'English' ? 'green' : 'white' }}
              onClick={() => setSubject('English')}
          >
              English
          </button>
      </div>
  </>
);
};

export default LearnPage;
