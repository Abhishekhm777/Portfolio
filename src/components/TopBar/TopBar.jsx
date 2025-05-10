import React, { useCallback, useEffect, useState } from "react";
import { SECTION_ITEMS } from "../../constants/const";
import "./TopBar.css";
import { debounce } from "../../utills/costomUtils";

const TopBar = () => {
  const [hasShadow, setHasShadow] = useState(false);

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
            <h1 key={`${item?.id}-${item?.title}`} className="topSectionText">
              {item?.title}
            </h1>
          );
        })}
      </div>
    );
  }, []);

  return (
    <div className={`TopBar ${hasShadow ? "shadow" : ""}`}>
      <h1 id="topTitle">My Portfolio</h1>
      {renderSectionItems()}
    </div>
  );
};

export default TopBar;
