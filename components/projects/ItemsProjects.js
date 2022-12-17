import React, { useEffect, useState } from "react";
import styled from "./style.module.css";
// import l from '../../public/image/giffo.jpg'

export const ItemsProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('api/projects')
    .then(res => res.json())
    .then(json => setProjects(json))
  }, [])


  return (
    <>
    
      {
        projects.map(el => {
          return (
        <div className={styled.container_itemsproj}>
          <div className={styled.container_img}>
            <img className={styled.container_img__img} src={el.image}/>
          </div>

          <div className={styled.container_info_proj}>
            <div className={styled.title_itemsproj}>
              <div>{el.name}</div>
            </div>

            <div className={styled.p_itemsproj}>
              <div>
                {el.description}
              </div>
            </div>

            <div className={styled.container_button}>
              <button className={styled.button_demo}>Demo</button>

              <button className={styled.button_code}>Code</button>
            </div>
          </div>
        </div>
          )
        })
      }
    
    </>
  );
};
