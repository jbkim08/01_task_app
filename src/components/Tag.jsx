import "./Tag.css";

export default function Tag({ tagName, selectTag }) {
  return (
    //버튼의 타입을 버튼으로 해야 submit 이벤트 발생안함
    <button type="button" className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
}
