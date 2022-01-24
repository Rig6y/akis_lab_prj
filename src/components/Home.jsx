import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Itsukushima_Gate.jpg/1024px-Itsukushima_Gate.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-medium">Shinto</h1>
            <p>
            Shinto (Japanese: 神道, romanized: Shintō) is a religion which originated in Japan. Classified as an East Asian religion by scholars of religion, its practitioners often regard it as Japan's indigenous religion and as a nature religion. Scholars sometimes call its practitioners Shintoists, although adherents rarely use that term themselves. There is no central authority in control of Shinto and much diversity exists among practitioners.
            </p>
            <p>
            Shinto is primarily found in Japan, where there are around 100,000 public shrines, although practitioners are also found abroad. Numerically, it is Japan's largest religion, the second being Buddhism. Most of the country's population takes part in both Shinto and Buddhist activities, especially festivals, reflecting a common view in Japanese culture that the beliefs and practices of different religions need not be exclusive. Aspects of Shinto have also been incorporated into various Japanese new religious movements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;