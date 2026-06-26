import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

export default function TaskCard({ title, tags, handleDelete, index }) {
  const handleClick = () => {
    if (confirm("삭제할까요?")) handleDelete(index);
  };
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} disabled />
          ))}
        </div>
        <div className="task_delete" onClick={handleClick}>
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
}
