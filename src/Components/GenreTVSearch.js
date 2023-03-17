import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import { apiKey, baseApiUrl, generalStillPath } from "../API/Constant";
import useFetch from "../API/FetchUrl";
import { CircularProgress, Alert } from "@mui/material";

export default function GenreTVSearch({ handleGenre, value }) {
  let url = `${baseApiUrl}/genre/tv/list?api_key=${apiKey}`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 200, color: "#fff" }}
      >
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            ["& .css-1any9jq-MuiFormLabel-root.Mui-focused"]: {
              color: "#66fcf1 !important",
            },
          }}
        >
          Genre:
        </FormLabel>
        <Select
          label="Genre"
          autoWidth
          sx={{
            color: "#fff",
            ["& .MuiSelect-icon"]: {
              fill: "#fff",
            },
  
            ["& .MuiSelect-standard"]: {
              borderBottom: "2px solid #fff",
            },
            ["& .css-woykue-MuiInputBase-root-MuiInput-root-MuiSelect-root:after"]: {
              borderBottom: "2px solid #66fcf1 !important",
            },
          }}
          onChange={(e, value) => {
            handleGenre(e);
          }}
          value={value}
        >
          {isDataAvailable &&
            data.genres.map((genre) => {
              return (
                <MenuItem value={genre.id} label={genre.name} key={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
}
