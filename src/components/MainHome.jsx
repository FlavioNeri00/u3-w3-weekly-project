import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import { Container, Row } from "react-bootstrap";

const MainHome = () => {
  //   const selector = useSelector((state) => state.hipHopArtistsReducer.content2);
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  let selectorHipHop = useSelector((state) => state.hipHopArtists.content);
  let selectorHipHop2 = useSelector((state) => state.hipHopArtists.content2);
  const dispatch = useDispatch();
  const fetchingAlbums = async () => {
    try {
      const resp = await fetch(URL + selectorHipHop.map((i) => i.selectorHipHop));
      if (resp.ok) {
        const fetchedAlbums = await resp.json();
        console.log("yo", fetchedAlbums.data);
        dispatch({ type: "GET_ALBUM", payload: fetchedAlbums.data });
        console.log(dispatch);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchingAlbums();
  }, []);

  return <AlbumCard />;
};
export default MainHome;
