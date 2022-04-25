import Info from "./components/Info/Info.js";
import Gentleman from "./components/Gentleman/Gentleman.js";

const gentlemen = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];

function App() {
  return (
    <div className="container">
      <Info
        titleText="The pointing gentlemen"
        counterNumber="0"
        counterText=" gentlemen pointing at you"
      ></Info>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman
            picture={"img/" + gentlemen[0].picture}
            alternativeText={gentlemen[0].alternativeText}
            name={gentlemen[0].name}
            profession={gentlemen[0].profession}
            status={gentlemen[0].status}
            twitter={gentlemen[0].twitter}
          ></Gentleman>
          <Gentleman
            picture={"img/" + gentlemen[1].picture}
            alternativeText={gentlemen[1].alternativeText}
            name={gentlemen[1].name}
            profession={gentlemen[1].profession}
            status={gentlemen[1].status}
            twitter={gentlemen[1].twitter}
          ></Gentleman>
          <Gentleman
            picture={"img/" + gentlemen[2].picture}
            alternativeText={gentlemen[2].alternativeText}
            name={gentlemen[2].name}
            profession={gentlemen[2].profession}
            status={gentlemen[2].status}
            twitter={gentlemen[2].twitter}
          ></Gentleman>
        </ul>
      </main>
    </div>
  );
}

export default App;
