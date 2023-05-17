import { useState } from "react";

export default function Cards(props) {
  function importAll(r) {
    return r
      .keys()
      .map(r)
      .map((file, i) => {
        let src = file.split(".")[0].split("/");
        let title = src[src.length - 1].split("-")[0].replaceAll("_", " ");
        return { src: file, key: i, title: title };
      });
  }
  const [images, setImages] = useState(
    importAll(require.context("../pictures", false, /\.(png|jpe?g|svg|webp)$/))
  );
  const [clickedCards, setClickedCards] = useState([]);
  function play(img) {
    if (clickedCards.includes(img.src)) endGame();
    else {
      setClickedCards([...clickedCards, img.src]);
      setImages(shuffle(images));
      props.setScore(props.score + 1);
    }
  }
  function endGame() {
    setClickedCards([]);
    props.setBestScore(Math.max(props.score, props.bestScore));
    props.setScore(0);
  }
  function shuffle(array) {
    let copy = array.slice();
    const shuffledArr = [];
    while (copy.length > 0) {
      let random = Math.floor(Math.random() * copy.length);
      shuffledArr.push(copy.splice(random, 1)[0]);
    }
    return shuffledArr;
  }
  return (
    <div id="cards">
      {images.map((img) => {
        return (
          <div className="card" key={img.key}>
            <div
              className="art"
              style={{ backgroundImage: `url(${img.src})` }}
              onClick={() => {
                play(img);
              }}
            >
              <p>{img.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
