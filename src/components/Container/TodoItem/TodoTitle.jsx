import styles from "./TodoItem.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

import { icons } from "../../../utils/icons";

function TodoTitle({ sortOrder, onSortClick }) {
  const { done } = icons;
  return (
    <tr className={clsx("plain-border", styles["item-title"])}>
      <th
        className={styles["todo-done"]}
        onClick={() => {
          onSortClick("completedAt");
        }}
      >
        <span>
          {" "}
          <img src={done} height="25px" width="25px" alt="Done Item Icon" />
        </span>
        <span>
          {sortOrder.column === "completedAt" &&
            (sortOrder.direction === "asc"
              ? " ↑ "
              : sortOrder.direction === "desc"
              ? " ↓ "
              : " ")}
        </span>
      </th>
      <th
        className={styles["todo-column"]}
        onClick={() => {
          onSortClick("dueDate");
        }}
      >
        <span>Due Date</span>
        <span>
          {sortOrder.column === "dueDate" &&
            (sortOrder.direction === "asc"
              ? " ↑ "
              : sortOrder.direction === "desc"
              ? " ↓ "
              : " ")}
        </span>
      </th>
      <th
        className={styles["todo-column"]}
        onClick={() => {
          onSortClick("priority");
        }}
      >
        <span>Priority</span>
        <span>
          {sortOrder.column === "priority" &&
            (sortOrder.direction === "asc"
              ? " ↑ "
              : sortOrder.direction === "desc"
              ? " ↓ "
              : " ")}
        </span>
      </th>
      <th
        className={styles["todo-task"]}
        onClick={() => {
          onSortClick("title");
        }}
      >
        <span>Title</span>
        <span>
          {sortOrder.column === "title" &&
            (sortOrder.direction === "asc"
              ? " ↑ "
              : sortOrder.direction === "desc"
              ? " ↓ "
              : " ")}
        </span>
      </th>
      <th className={styles["todo-btns"]}></th>
    </tr>
  );
}

TodoTitle.propTypes = {
  sortOrder: PropTypes.object,
  onSortClick: PropTypes.func,
};

export default TodoTitle;
