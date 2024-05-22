import { NavLink } from "react-router-dom";
import "./HeroBlock.css";

function HeroBlock() {
  const HeroLevel = (title, description, image, target) => {
    return (
      <div className="hero-block__options--option">
        <div className="hero-block__options--option-image">
          <img src={image} alt={title} width={200} />
        </div>
        <div>
          <h2 className="hero-block__options--option-title">{title}</h2>
          <p>{description}</p>
          <p className="hero-block__options--option-link">
            <NavLink to={target}>Ver más información</NavLink>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="hero-block">
      <article className="hero-block__central">
        <img
          src="/images/cuaed-internacional-blanco.png"
          alt="CUAED Internacional"
          width={250}
        />
        <p className="my-10">
          La oficina de internacionalización de la CUAED se dedica a fortalecer
          la cooperación global mediante cursos COIL, promover la movilidad
          estudiantil y crear una red de docentes expertos del SUAyED. Su misión
          es vincular proyectos educativos con instituciones internacionales,
          enriqueciendo la experiencia académica y expandiendo las oportunidades
          para la comunidad universitaria.
        </p>
      </article>
      <article className="hero-block__options">
        {HeroLevel(
          "Bachillerato",
          "Conecta, colabora y crece con la comunidad de bachillerato.",
          "/images/hero-bachillerato.jpg",
          "bachillerato"
        )}
        {HeroLevel(
          "Licenciatura",
          "Innova, colabora y expande tus horizontes en otras universidades.",
          "/images/hero-licenciatura.jpg",
          "licenciatura"
        )}
      </article>
    </section>
  );
}

export default HeroBlock;
