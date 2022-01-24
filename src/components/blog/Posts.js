import React, {useState} from "react";
import "./Posts.css";

function Posts() {

  const [count, setCount] = useState(0);

  function Stating () {
      setCount(count + 1)
  }



  return (
    <div className="home">
      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
                onClick={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Kobayashi_Izanami_and_Izanagi.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
            <h1 class="font-weight-light">Izanagi (Click on image)</h1>
            {count}
             <p>
             Izanagi (イザナギ) or Izanaki (イザナキ) is a creator deity (kami) in Japanese mythology. He and his sister-wife Izanami are the last of the seven generations of primordial deities that manifested after the formation of heaven and earth.
            </p>
          </div>
        </div>
      </div>

      <div class="female">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
                onDoubleClick={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Kobayashi_Izanami_and_Izanagi.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Izanami (Doubleclick on image)</h1>
              {count}
             <p>
             Izanami no mikoto (伊弉冉尊/伊邪那美命, meaning "she who invites") is a creator deity of both creation and death in Japanese mythology. She is the former wife of the god Izanagi-no-mikoto. She is also referred to as Izanami no kami.
            </p>
          </div>
        </div>
      </div>

      <div class="female">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onContextMenu={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Amaterasu_cave_crop.jpg/800px-Amaterasu_cave_crop.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Amaterasu (Right click on image)</h1>
              {count}
             <p>
             Amaterasu, also known as Amaterasu-Ōmikami (天照大御神, 天照大神) or Ōhirume-no-Muchi-no-Kami (大日孁貴神) among other names, is the goddess of the sun in Japanese mythology. One of the major deities (kami) of Shinto, she is also portrayed in Japan's earliest literary texts. Along with her siblings, the moon deity Tsukuyomi and the impetuous storm god Susanoo, she is considered to be one of the "Three Precious Children", the three most important offspring of the creator god Izanagi.
            </p>
          </div>
        </div>
      </div>

      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onDrag={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dragon_Susanoo_no_mikoto_and_the_water_dragon.jpg/320px-Dragon_Susanoo_no_mikoto_and_the_water_dragon.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Susanoo (Drag image)</h1>
              {count}
             <p>
             Susanoo (スサノオ; historical orthography: スサノヲ, 'Susanowo') is a kami in Japanese mythology. The younger brother of Amaterasu, goddess of the sun and mythical ancestress of the Japanese imperial line, he is a multifaceted deity with contradictory characteristics (both good and bad), being portrayed in various stories either as a wild, impetuous god associated with the sea and storms, as a heroic figure who killed a monstrous serpent, or as a local deity linked with the harvest and agriculture.
            </p>
          </div>
        </div>
      </div>

      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onDragEnd={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shinto-Tsukuyomi-no-Mikoto-Old-Artwork.png/220px-Shinto-Tsukuyomi-no-Mikoto-Old-Artwork.png"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Tsukuyomi (Stop drag image)</h1>
              {count}
             <p>
             Tsukuyomi-no-Mikoto (ツクヨミノミコト, 月読命), or simply Tsukuyomi (ツクヨミ, 月読) or Tsukiyomi (ツキヨミ), is the moon god in Japanese mythology and the Shinto religion. The name "Tsukuyomi" is a compound of the Old Japanese words tsuku (月, "moon, month", becoming modern Japanese tsuki) and yomi (読み, "reading, counting"). The Nihon Shoki mentions this name spelled as Tsukuyumi (月弓, "moon bow"), but this yumi is likely a variation in pronunciation of yomi.
            </p>
          </div>
        </div>
      </div>

      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onMouseMove={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ebisu_at_Ebisu-jinja_-_Kyoto%2C_Japan_-_DSC07332.jpg/220px-Ebisu_at_Ebisu-jinja_-_Kyoto%2C_Japan_-_DSC07332.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Ebisu (Move mouse on image)</h1>
              {count}
             <p>
             Ebisu (えびす, 恵比須, 恵比寿, 夷, 戎), also transliterated Webisu (ゑびす, see historical kana orthography) or called Hiruko (蛭子) or Kotoshiro-nushi-no-kami (事代主神), is the Japanese god of fishermen and luck. He is one of the Seven Gods of Fortune (七福神, Shichifukujin), and the only one of the seven to originate purely from Japan without any Buddhist or Taoist influence.
            </p>
          </div>
        </div>
      </div>

      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onMouseUp={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tenjin_Crossing_to_China.jpg/220px-Tenjin_Crossing_to_China.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Tenjin (Click any mouse key on image)</h1>
              {count}
             <p>
             In the Shinto religion of Japan, Tenjin (天神) is the patron kami (deity) of academics, scholarship, of learning, and of the intelligentsia. Tenjin is the deification of Sugawara no Michizane (845–903), the famous scholar, poet and politician of the Heian period. Ten (天) means sky and jin (神) means god or deity. The original meaning of Tenjin, sky deity, is almost the same as that of Raijin (a god of thunder).
            </p>
          </div>
        </div>
      </div>

      <div class="male">
        <div class="row align-items-center my-5">
            <div class="col-lg-3">
              <img
              onCopy={Stating}
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wind-God-Fujin-by-Ogata-Korin.jpg/800px-Wind-God-Fujin-by-Ogata-Korin.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <h1 class="font-weight-light">Fūjin (CTRL+C)</h1>
              {count}
             <p>
             Fūjin (風神, lit. "Wind God") or Fūten (風天) is the Japanese god of the wind and one of the eldest Shinto gods. He is portrayed as a terrifying wizardly demon, resembling a red-headed green-skinned humanoid wearing a leopard skin, carrying a large bag of winds on his shoulders. In Japanese art, the deity is often depicted together with Raijin, the god of lightning, thunder and storms.
            </p>
          </div>
        </div>
      </div>

      

    </div>  
  );
}

export default Posts;