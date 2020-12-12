//Siempre que cree un componente en react debo importar react
import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  // Es requisito que todos los componentes cumplan con el método render()
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de conferencia" />
        </div>

        <div className="badge_section-name">
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
            className="badge_avatar"
          />
          <h1>
            Andres <br /> Romero{" "}
          </h1>
        </div>

        <div className="badge_section-info">
          <p> Ingeniero de Sistemas </p>
          <p> @JairoAndresR </p>
        </div>
      </div>
    );
  }
}

export default Badge;
