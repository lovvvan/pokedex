import "./SubMenuItem.css";

function SubMenuItem({ title, handleClick, activePage }) {
  let isActive = activePage === title;

  return (
    <div className="SubMenuItem" onClick={(e) => handleClick(title)}>
      <p
        style={{
          textDecoration: isActive ? "underline" : "none",
          fontWeight: isActive ? "600" : "400",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default SubMenuItem;
