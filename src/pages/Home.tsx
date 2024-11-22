import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import styles from "./home.module.css";
import searchNormalIcon from "../assets/search-normal.png";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <>
      <Nav2 />
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          placeholder="Search for a hobby group"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div></div>
      <div></div>
    </>
  );
}
