import NavBar from "./NavBar";
import Banner from "./Banner";
import Row from "./Row";

function Home() {
  return (
    <div className="home-main-container">
      <NavBar />
      <Banner />
      <Row
        title="Popular movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }`}
      />
      <Row
        title="Trending TV shows"
        fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${
          import.meta.env.VITE_API_KEY
        }`}
      />
      <Row
        title="Upcoming movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }`}
      />
      <Row
        title="Top rated movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }`}
      />
      <Row
        title="Popular TV shows"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }`}
      />
    </div>
  );
}

export default Home;
