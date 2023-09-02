import React from "react";
import styles from "./MyPager.module.css";
import { getPagesArray } from "../../../utils/pages";

const MyPager = ({ totalPages, currentPage, changePage }) => {
    let pageArray = getPagesArray(totalPages);
    
    return (
    <div className={styles.page__wrapper}>
      {pageArray.map((pg) => (
        <span
          onClick={() => changePage(pg)}
          key={pg}
          className={(pg === currentPage
            ? [styles.page, styles.page__current]
            : [styles.page]
          ).join(" ")}
        >
          {pg}
        </span>
      ))}
    </div>
  );
};

export default MyPager;
