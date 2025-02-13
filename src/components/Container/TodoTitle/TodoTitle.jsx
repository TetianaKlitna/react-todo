import styles from "./TodoTitle.module.css";
import PropTypes from "prop-types";

import clsx from "clsx";

function TodoTitle({sortOrder, onSortClick}){

    return (
        <thead>
            <tr className={clsx("plain-border", styles["item-title"])}>
                <th onClick={() => {onSortClick("completedAt")}} className={styles["todo-done"]}>
                    <span>Done</span>
                    <span>{
                            sortOrder.column === "completedAt" && (
                            sortOrder.direction === 'asc' ? ' ↑ ' :
                            sortOrder.direction === 'desc' ? ' ↓ ' :
                            ' ')
                    }</span>
                </th>
                <th onClick={() => {onSortClick("dueDate")}} className={styles["todo-column"]}>
                    <span>Due Date</span>
                    <span>{
                            sortOrder.column === "dueDate" && (
                            sortOrder.direction === 'asc' ? ' ↑ ' :
                            sortOrder.direction === 'desc' ? ' ↓ ' :
                            ' ')
                    }</span>
                </th>
                <th onClick={() => {onSortClick("priority")}} className={styles["todo-column"]}>
                    <span>Priority</span>
                    <span>{
                            sortOrder.column === "priority" && (
                            sortOrder.direction === 'asc' ? ' ↑ ' :
                            sortOrder.direction === 'desc' ? ' ↓ ' :
                            ' ')
                    }</span>
                </th>
                <th onClick={() => {onSortClick("title")}} className={styles["todo-title"]}>
                    <span>Title</span>
                    <span>{
                            sortOrder.column === "title" && (
                            sortOrder.direction === 'asc' ? ' ↑ ' :
                            sortOrder.direction === 'desc' ? ' ↓ ' :
                            ' ')
                    }</span>
                </th>
                <th style={{width:'20%'}}></th>
            </tr>
        </thead>
    );
}

TodoTitle.propTypes = {
    sortOrder: PropTypes.object,
    onSortClick: PropTypes.func,
};

export default TodoTitle;