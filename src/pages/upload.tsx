import { LinearProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";

const CLOUD_NAME = "dbiy7lr8q";
const UPLOAD_PRESET = "ndmucxnl";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };
  const uploadHandler = async () => {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        { method: "POST", body: data }
      );
      console.log(res);
      const resJson = await res.json();
      console.log(resJson);
      if (resJson) {
        setImageUrl(resJson.url);
      }
      setLoading(false);
    }
  };

  return (
    <Stack>
      {loading && (
        <Stack
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `100wv`,
            height: `100vh`,
            backgroundColor: `rgba(255,255,255, 0.3)`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            zIndex: 100,
          }}
        >
          <Typography>Loading ...</Typography>
          <LinearProgress />
        </Stack>
      )}
      <Stack direction={`row`}>
        <input type="file" onChange={fileChangeHandler} />
        <button onClick={uploadHandler}>Upload</button>
        {imageUrl && <img src={imageUrl} alt="uploaded" />}
      </Stack>
    </Stack>
  );
};

export default Page;
