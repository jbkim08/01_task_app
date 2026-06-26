import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm() {
  //할일을 객체로 관리(여러 입력)
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    //이전의 할일객체 값을 새로운 값으로 업데이트
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //이벤트 중지
    console.log(taskData);
  };
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="할일을 입력하세요"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              onChange={handleChange}
              name="status"
              className="task_status"
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
