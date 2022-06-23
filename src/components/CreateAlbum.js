import * as React from "react";
import useCreateAlbum from "../hooks/createAlbum";
import AlbumForm from "./AlbumForm";
import { useNavigate } from "react-router-dom";

const CreateAlbum = () => {
  const navigate = useNavigate();
  const createAlbum = useCreateAlbum();

  const handleSubmit = React.useCallback(
    (newAlbum) => {
      createAlbum(newAlbum).then(() => {
        navigate("/");
      });
    },
    [createAlbum, navigate]
  );

  return <AlbumForm onSubmit={handleSubmit} submitLabel="Maak aan" />;
};

export default CreateAlbum;