import React, { FC, useState } from "react";
import "./Account.css";
import { Student } from "../../../interfaces/student";

interface AccountProps {
    student: Student;
}

function Account(props: AccountProps) {

  return (
    <div>
        <div className="header1">
            <h1>Account</h1>
            <h2>Student Information</h2>
          <p>Name: {props.student.name}</p>
          <p>Username: {props.student.username}</p>
          <p>Password: {props.student.password}</p>
          <p>Email: {props.student.email}</p>
          <p>Grade: {props.student.grade}</p>
        </div>
    </div>
  );
};

export default Account;
