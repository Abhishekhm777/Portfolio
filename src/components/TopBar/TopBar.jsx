import React, { useCallback, useEffect, useState } from "react";
import { SECTION_ITEMS } from "../../constants/const";
import "./TopBar.css";
import { debounce } from "../../utills/costomUtils";

const TopBar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  const handleOnClick = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleOnHeaderClick = useCallback(() => {
    const element = document.getElementById("aboutMe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const shouldUpdate = window.scrollY > 50;
      setHasShadow((prev) => {
        if (prev !== shouldUpdate) {
          return shouldUpdate;
        }
        return prev;
      });
    }, 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSectionItems = useCallback(() => {
    return (
      <div className="topSection">
        {SECTION_ITEMS?.map((item) => {
          return (
            <h1
              onClick={() => handleOnClick(item?.id)}
              key={`${item?.id}-${item?.title}`}
              className="topSectionText"
            >
              {item?.title}
            </h1>
          );
        })}
      </div>
    );
  }, []);

  return (
    <div className={`TopBar ${hasShadow ? "shadow" : ""}`}>
      <h1 onClick={handleOnHeaderClick} id="topTitle">
        My Portfolio
      </h1>
      {renderSectionItems()}
    </div>
  );
};

export default TopBar;
