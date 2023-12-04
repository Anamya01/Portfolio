import "./portfolio.css";

import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG4 from "../../assets/3.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "E-MART",
      img: IMG1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic expedita ullam, soluta rerum a quod similique ipsam aperiam at dolorem impedit voluptas atque ducimus, quibusdam amet rem doloremque cumque!",
      technologies: "Html | CSS | Javascript | React Js",
      link: "/",
      github: "/",
    },
    {
      id: 2,
      title: "Wac.",
      img: IMG4,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic expedita ullam, soluta rerum a quod similique ipsam aperiam at dolorem impedit voluptas atque ducimus, quibusdam amet rem doloremque cumque! ",
      technologies: "React | Redux",
      link: "/",
      github: "/",
    },
    {
      id: 3,
      title: "Focus Mode",
      img: IMG2,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic expedita ullam, soluta rerum a quod similique ipsam aperiam at dolorem impedit voluptas atque ducimus, quibusdam amet rem doloremque cumque!",
      technologies: "React | Redux",
      link: "/",
      github: "/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
