
import { useState, useEffect } from "react";

const workoutDays = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

export default function FullFitnessDashboard() {
  const [workoutLog, setWorkoutLog] = useState(() => {
    const saved = localStorage.getItem("workoutLog");
    return saved ? JSON.parse(saved) : { ...workoutDays };
  });

  const handleLog = (day, entry) => {
    const updated = {
      ...workoutLog,
      [day]: [...(workoutLog[day] || []), entry],
    };
    setWorkoutLog(updated);
    localStorage.setItem("workoutLog", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Workout Logger</h1>
      {Object.keys(workoutDays).map((day) => (
        <div key={day} style={{ marginBottom: "20px" }}>
          <h2>{day}</h2>
          <button
            onClick={() => handleLog(day, "Sample Workout")}
            style={{ padding: "5px 10px", marginBottom: "10px" }}
          >
            Log Sample Workout
          </button>
          <ul>
            {workoutLog[day]?.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
