import "./TaskColumn.css";
import Todo from "../assets/direct-hit.png";

export default function TaskColumn({ title }) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={Todo} alt="" />
        {title}
      </h2>
    </section>
  );
}
