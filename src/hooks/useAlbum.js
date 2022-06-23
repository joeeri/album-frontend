import * as React from "react";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useAlbum = (id) => {
  const [album, setAlbum] = React.useState();

  React.useEffect(() => {
    const request = fetch(`${endpoint}/${id}`);

    request
      .then((response) => {
        if (!response.ok) {
          console.error(response.statusText);
          return;
        }

        return response.json();
      })
      .then((result) => {
        setAlbum(result);
      });
  }, [id]);

  const updateAlbum = React.useCallback(
    (changedAlbum) => {
      const request = fetch(`${endpoint}/${id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(changedAlbum)
      });

      request.then((response) => {
        if (!response.ok) {
          console.error(response.statusText);
        }
        setAlbum(changedAlbum);
      });

      return request;
    },
    [id]
  );

  const removeAlbum = React.useCallback(() => {
    const request = fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    });

    request.then((response) => {
      if (!response.ok) {
        console.error(response.statusText);
      }
    });

    return request;
  }, [id]);

  return React.useMemo(
    () => ({
      album,
      updateAlbum,
      removeAlbum,
    }),
    [album, updateAlbum, removeAlbum]
  );
};

export default useAlbum;