import React from "react";
import styled from "./style.module.css";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";

export const CardProfile = () => {
  return (
    <div className={styled.container}>
      <div className={styled.container_image}>
        <div className={styled.image}></div>
      </div>

      <div className={styled.container_name}>
        <div className={styled.name_container_name}>Vicente Millan</div>
        <div className={styled.title_container_name}>FullStack Developer</div>
      </div>

      <div className={styled.container_contact}>
        <div className={styled.email_container_contact}><MdEmail/> Vicentemillan1992@gmail.com</div>
        <div className={styled.phone_container_contact}><AiTwotonePhone/> (+54) 1164786787</div>
      </div>

      <div className={styled.container_p}>
        <p className={styled.p_container_p}>
          Sobre todo soy una persona autodidacta, que sabe admitir sus errores y
          corregirlos lo más rápido posible. En la empresa o el equipo donde
          estoy le sumo innovación, soluciones a los problemas y dedicación para
          llevar el producto más allá del 100%.
        </p>
      </div>
    </div>
  );
};
