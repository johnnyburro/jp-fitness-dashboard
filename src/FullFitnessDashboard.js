import React, { useState, useEffect } from "react";

const weeklyPlan = {
  Monday: [
    {
      exercise: "Flat Chest Press",
      sets: 5,
      reps: 5,
      rpe: "8–9",
      rest: "2–3 min",
      type: "Ramping Sets",
      url: "https://youtu.be/NIDP5T6enEM?si=YXcQJOKHF1lusihH",
    },
    {
      exercise: "Incline Machine Press",
      sets: 4,
      reps: 10,
      rpe: "8",
      rest: "1.5–2 min",
      type: "Straight Sets",
      url: "https://youtu.be/CoLXTlZlpuA",
    },
    {
      exercise: "Pec Dec",
      sets: 3,
      reps: 12,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/NGDKhKp1Zwc",
    },
  ],
  Tuesday: [
    {
      exercise: "Lat Pulldown",
      sets: 4,
      reps: 8,
      rpe: "9",
      rest: "2 min",
      type: "Straight Sets",
      url: "https://youtu.be/iQYzT8RPO9A",
    },
    {
      exercise: "Seated Row (Cable)",
      sets: 3,
      reps: 10,
      rpe: "8",
      rest: "1.5–2 min",
      type: "Straight Sets",
      url: "https://youtu.be/hM8qwr4xHPA",
    },
    {
      exercise: "Straight Arm Pulldown",
      sets: 3,
      reps: 12,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/OcFVM9rkqak",
    },
  ],
  Wednesday: [
    {
      exercise: "Leg Press",
      sets: 4,
      reps: 10,
      rpe: "9",
      rest: "2–3 min",
      type: "Straight Sets",
      url: "https://youtu.be/IZxyjW7MPJQ",
    },
    {
      exercise: "Lying Leg Curl",
      sets: 4,
      reps: 12,
      rpe: "8",
      rest: "2 min",
      type: "Straight Sets",
      url: "https://youtu.be/1Tq3QdYUuHs",
    },
    {
      exercise: "Leg Extension",
      sets: 3,
      reps: 15,
      rpe: "9",
      rest: "2 min",
      type: "Straight Sets",
      url: "https://youtu.be/YyvSfVjQeL0",
    },
  ],
  Thursday: [
    {
      exercise: "Dumbbell Shoulder Press",
      sets: 4,
      reps: 8,
      rpe: "8–9",
      rest: "2 min",
      type: "Ramping Sets",
      url: "https://youtu.be/B-aVuyhvLHU",
    },
    {
      exercise: "Lateral Raises (Cable)",
      sets: 3,
      reps: 15,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/3VcKaXpzqRo",
    },
    {
      exercise: "Face Pull",
      sets: 3,
      reps: 15,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/d_Rx1zZnD4c",
    },
  ],
  Friday: [
    {
      exercise: "Barbell Curl",
      sets: 3,
      reps: 10,
      rpe: "9",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/in7PaeYlhrM",
    },
    {
      exercise: "Triceps Rope Pushdown",
      sets: 3,
      reps: 12,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/vB5OHsJ3EME",
    },
    {
      exercise: "Cable Curl",
      sets: 3,
      reps: 15,
      rpe: "8",
      rest: "1.5 min",
      type: "Straight Sets",
      url: "https://youtu.be/qXJcV2r-blI",
    },
  ],
  Saturday: [
    {
      exercise: "Notes",
      sets: "",
      reps: "",
      rpe: "",
      rest: "",
      type: "",
      url: "",
    },
  ],
  Sunday: [],
};

export default function FullFitnessDashboard() {
  const [weights, setWeights] = useState(() => {
    const saved = localStorage.getItem("weights");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("weights", JSON.stringify(weights));
  }, [weights]);

  const handleWeightChange = (day, index, value) => {
    setWeights((prev) => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [index]: value,
      },
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workout Logger</h1>
      {Object.entries(weeklyPlan).map(([day, exercises]) => (
        <div key={day} style={{ marginBottom: "30px" }}>
          <h2>{day}</h2>
          {exercises.length === 0 ? (
            <p>Rest day</p>
          ) : (
            <ul>
              {exercises.map((ex, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <strong>{ex.exercise}</strong>
                  {ex.sets && (
                    <div>
                      Sets: {ex.sets} | Reps: {ex.reps} | RPE: {ex.rpe} | Rest:{" "}
                      {ex.rest} | Type: {ex.type}
                    </div>
                  )}
                  {ex.url && (
                    <a href={ex.url} target="_blank" rel="noreferrer">
                      Watch Demo
                    </a>
                  )}
                  {ex.exercise !== "Notes" && (
                    <div>
                      <input
                        type="text"
                        placeholder="Weight Used"
                        value={weights?.[day]?.[index] || ""}
                        onChange={(e) =>
                          handleWeightChange(day, index, e.target.value)
                        }
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
