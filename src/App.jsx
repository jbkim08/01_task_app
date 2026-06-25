import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="할일" />
        <TaskColumn title="진행 중" />
        <TaskColumn title="완료" />
      </main>
    </div>
  );
}
