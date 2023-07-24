import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hideDoneTasks ? " list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--checked">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__content${task.done ? " list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove"><i className="fa fa-trash"></i></button>
            </li>
        ))}
    </ul>
);

export default Tasks;