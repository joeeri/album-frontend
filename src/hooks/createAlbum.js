import * as React from 'react';
import { useNavigate } from "react-router-dom";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useCreateAlbum = () => {
  const navigate = useNavigate();
  const createAlbum = React.useCallback((newAlbum) => {
    const handleSubmit =  (newAlbum) => {
        console.log(newAlbum);
        const request = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {"Content-Type": "application/json"}
        });
   
        request.then((response) => {
            if(!response.ok) {
                console.error(response.statusText);
            } else {
                navigate("/");
            }
        })
    };
    
    return handleSubmit();
  }, []);
  
  return createAlbum;
}

export default useCreateAlbum;