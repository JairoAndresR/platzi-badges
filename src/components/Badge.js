//Siempre que cree un componente en react debo importar react
import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  // Es requisito que todos los componentes cumplan con el método render()
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de conferencia" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Andres <br /> Romero{" "}
          </h1>
        </div>

        <div>
          <p> Ingeniero de Sistemas </p>
          <p> @JairoAndresR </p>
        </div>
      </div>
    );
  }
}

export default Badge;
