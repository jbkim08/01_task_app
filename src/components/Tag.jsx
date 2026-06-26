import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    //버튼의 타입을 버튼으로 해야 submit 이벤트 발생안함
    <button
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}
