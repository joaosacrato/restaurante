import React from "react";
import { FaThumbsDown } from "react-icons/fa";

function NotFound() {
  return (
    <div className="div-404">
      <FaThumbsDown className="span-404" />
      <span className="span-404">Erro 404</span>
      <span className="span-404">Página não encontrada</span>
    </div>
  );
}

export default NotFound;
