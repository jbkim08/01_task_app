import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="할일" icon={todoIcon} tasks={tasks} status="todo" />
        <TaskColumn
          title="진행 중"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="완료" icon={doneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
}
