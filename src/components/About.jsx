import React from "react";
import "./About.css";
import { Component } from "react/cjs/react.production.min";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mX8cz1LEeXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">About</h1>
              <p>
              Shinto is polytheistic and revolves around the <span>kami</span>, supernatural entities believed to inhabit all things.
              The link between the kami and the natural world has led to Shinto being considered <span>animistic</span>.
              The kami are worshiped at kamidana household shrines, family shrines, and jinja public shrines.
              </p>
              <p>
              Little emphasis is placed on specific moral codes or particular afterlife beliefs, although the dead are deemed capable of becoming <span>kami</span>.
              The religion has no single creator or specific doctrinal text, but exists in a diverse range of local and regional forms.
              </p>
              <p>
              There is no universally agreed definition of Shinto.However, the authors <span>Joseph Cali</span> and <span>John Dougill</span> stated that if there was "one single, broad definition of Shinto" that could be put forward, it would be that "Shinto is a belief in kami", the supernatural entities at the centre of the religion. The Japanologist Helen Hardacre stated that "Shinto encompasses doctrines, institutions, ritual, and communal life based on kami worship", while the scholar of religion <span>Inoue Nobutaka</span> observed the term was "often used" in reference to kami worship and related theologies, rituals and practices. Various scholars have referred to practitioners of Shinto as Shintoists, although this term has no direct translation in the Japanese language.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;