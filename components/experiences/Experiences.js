import React from "react";
import { ItemsExperiences } from "./ItemsExperiences";
import styled from "./style.module.css";

export const Experiences = () => {
  return (
    <div className={styled.container}>
      <div className={styled.container_title}>
        <div className={styled.title}>Experiences</div>
      </div>

      <div className={styled.container_logos}>
        <div className={styled.logo}></div>

        <div className={styled.logo}></div>

        <div className={styled.logo}></div>
      </div>

      <div className={styled.container_descriptions}>
        <ItemsExperiences/>
      </div>
    </div>
  );
};
