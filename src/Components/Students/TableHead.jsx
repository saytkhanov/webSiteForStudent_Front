import React from "react";
import styles from "./styles.module.css";

function TableHead(props) {
  return (
    <>
      <thead>
        <tr>
          <th className={styles.th}> </th>
          <th className={styles.th}>ФИО</th>
          <th className={styles.th}>Последнее изменение</th>
          <th className={styles.th}>Статус</th>
          <th className={styles.th}>Кол-во заметок</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
