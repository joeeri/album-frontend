import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAlbums from "../hooks/useAlbums";
import AlbumForm from "./AlbumForm";

const AlbumDetail = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const { album, removeAlbum } = useAlbums(albumId);

  const handleRemove = React.useCallback(() => {
    removeAlbum().then(() => {
        navigate.push("/");
    });
  }, [removeAlbum, navigate]);

  return album ? (
    <AlbumForm album={album} onRemove={handleRemove}/> ) : null;
};

export default AlbumDetail;