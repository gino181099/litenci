import React from "react";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="blog">
      <div className="title">
        <h2>Blog</h2>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor
        </p>
      </div>
      <div className="entradas">
        <img alt="" className="entradas__img" />
        <h3 className="entradas__title">Título</h3>
        <p className="entradas__description">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor
        </p>
        <NavLink to="">Leer más</NavLink>
      </div>
    </div>
  );
}

export default Blog;
