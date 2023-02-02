import React, { useReducer, useState } from "react";
import Student from "./Student";

export default function UseReducer2() {
  const [name, setName] = useState("");
  const initialState = {
    count: 0,
    students: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-student":
        const name = action.payload.name;
        const newStudent = {
          id: Date.now(),
          name,
          isHere: false,
        };
        return {
          count: state.count + 1,
          students: [...state.students, newStudent],
        };
      case "delete-student":
        return {
          count: state.count - 1,
          students: state.students.filter(
            (student) => student.id !== action.payload.id
          ),
        };
      case "mark-student":
        return {
          count: state.count,
          students: state.students.map((student) => {
            if (student.id === action.payload.id) {
              return { ...student, isHere: !student.isHere };
            }
            return student;
          }),
        };
      default:
        return state;
    }
  };
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type={"text"}
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          ></Student>
        );
      })}
    </div>
  );
}
