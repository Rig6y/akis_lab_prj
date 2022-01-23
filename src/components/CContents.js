import React from "react";
import "./CContents.css";

class CContents extends React.Component {
 render() {
    return(
        <div className="contentsContainer">
            <h1>Shinto</h1>
            <h2>Shinto (Japanese: 神道, romanized: Shintō) is a religion which originated in Japan. Classified as an East Asian religion by scholars of religion, its practitioners often regard it as Japan's indigenous religion and as a nature religion.</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Itsukushima_Gate.jpg/1024px-Itsukushima_Gate.jpg" alt="" />
            <h2>Shinto is polytheistic and revolves around the <span>KAMI</span>, supernatural entities believed to inhabit all things. The link between the kami and the natural world has led to Shinto being considered animistic. The kami are worshiped at kamidana household shrines, family shrines, and jinja public shrines.</h2>
            <h2>Public shrines also supply religious paraphernalia such as amulets to the religion's adherents and facilitate forms of divination. Shinto places a major conceptual focus on ensuring purity, largely by cleaning practices such as ritual washing and bathing, especially before worship. Little emphasis is placed on specific moral codes or particular afterlife beliefs, although the dead are deemed capable of becoming kami.</h2>
            <h2>The religion has no single creator or specific doctrinal text, but exists in a diverse range of local and regional forms.</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mX8cz1LEeXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
 };
};
export default CContents;