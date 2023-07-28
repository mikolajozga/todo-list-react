import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`}
            >
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="list__button list__button--checked"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`list__content${task.done ? " list__content--done" : ""}`}
                >
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button list__button--remove"><i className="fa fa-trash"></i>
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;