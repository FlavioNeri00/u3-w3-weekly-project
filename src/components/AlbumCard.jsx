import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <div className="text-center">
      <Col md={4}>
        <Link to="/album-page/:id">
          <img className="img-fluid" src="{album.album.cover_medium}" alt="" />
        </Link>
        <Link to="/album-page/:id">a</Link>
        <Link to="/artist_page/:id">e</Link>
      </Col>
    </div>
  );
};

export default AlbumCard;
