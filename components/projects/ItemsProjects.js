import React from "react";
import styled from "./style.module.css";

export const ItemsProjects = () => {
  return (
    <div className={styled.container_itemsproj}>
      <div className={styled.container_img}></div>

      <div className={styled.title_itemsproj}>
        <div>Recipe Blog</div>
      </div>

      <div className={styled.p_itemsproj}>
        <div>
          In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
        </div>
      </div>

      <div className={styled.container_button}>
        <button className={styled.button_demo}>Demo</button>

        <button className={styled.button_code}>Code</button>
      </div>
    </div>
  );
};
