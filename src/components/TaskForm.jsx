import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

export default function TaskForm() {
  //할일을 객체로 관리(여러 입력)
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const selectTag = (tag) => {
    //태그가 이미 있으면 삭제 없으면 추가
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  console.log(taskData.tags); //태그 선택을 계속 확인
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
          value={taskData.task}
          onChange={handleChange}
          type="text"
          className="task_input"
          placeholder="할일을 입력하세요"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" selectTag={selectTag} />
            <Tag tagName="CSS" selectTag={selectTag} />
            <Tag tagName="JavaScript" selectTag={selectTag} />
            <Tag tagName="React" selectTag={selectTag} />
          </div>
          <div>
            <select
              value={taskData.status}
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
