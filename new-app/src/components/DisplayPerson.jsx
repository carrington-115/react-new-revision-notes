import React, { useEffect, useState } from "react";
export function DisplayPerson({ name, image }) {
  const [imageAvailable, setImageAvailable] = useState(false);

  useEffect(() => {
    if (image != null) {
      setImageAvailable(true);
    }
  }, []);
  return (
    <div>
      {imageAvailable && <img src={image.profile.url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
