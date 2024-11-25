import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);
  function handleOpeningSidebar() {
    setIsSidebarOpen(true);
  }
  function handleCloseSidebar() {
    setIsSidebarOpen(false);
  }
  function handlePopup() {
    setIsPopupOpen(true);
  }
  function handleClosePopup() {
    setIsPopupOpen(false);
  }
  return (
    <div className={style.wrapper}>
      {!isSidebarOpen && <i className={`${style.bar} fa-solid fa-bars fa-2x p-5 `} onClick={handleOpeningSidebar}></i>}
      <div
        className={`${style.sidebar} ${isSidebarOpen ? style.sidebarOpen : !isInitialRender ? style.sidebarClose : ""}`}
      >
        <div className={`${style.head} d-flex justify-content-between `}>
          <h3 className="mb-3">
            Coding <span className="text-info">Addict</span>
          </h3>
          <i className={`${style.close} fa fa-close text-danger fa-2x`} onClick={handleCloseSidebar}></i>
        </div>
        <div className="body ">
          <div className={`${style.item}`}>
            <i className="fa fa-home "></i>
            <Link className={style.link} to="/home">
              Home
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-user-group"></i>
            <Link className={style.link} to={"/team"}>
              Team
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-folder-open"></i>
            <Link className={style.link} to="/projects">
              Projects
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-calendar"></i>
            <Link className={style.link} to={"/calender"}>
              Calender
            </Link>
          </div>
          <div className={`${style.item}`}>
            <i className="fa-solid fa-file"></i>
            <Link className={style.link} to={"/documents"}>
              Documents
            </Link>
          </div>
        </div>
      </div>
      <div className={style.landing}>
        <button onClick={handlePopup}>Show Model</button>
        <div className={`${style.overlay} ${isPopupOpen ? style.overlayShow : ""}`}>
          <div className={`${style.popupContent} ${isPopupOpen ? style.popupContentShow : ""}`}>
            <i className={`${style.close} ${style.one} fa fa-close text-danger fa-2x `} onClick={handleClosePopup}></i>

            <h2>Model Content</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
