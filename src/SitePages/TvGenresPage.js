import React from "react";
import SearchSection from "../Components/SearchSectionSearchPage";
import SearchResultCard from "../Components/SearchResultCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import useFetch from "../API/FetchUrl";
import { useState } from "react";
import SearchPageStyle from "../Styles/SearchPageStyle";

export default function TvGenres() {
  let [page, setPage] = useState(1);
  let handleChange = (e, value) => setPage(value);

  let params = useParams();

  let [genre, setGenre] = useState(params.genre);
  let handleGenre = (e) => setGenre(e.target.value);

  let url = `${baseApiUrl}/discover/tv?api_key=${apiKey}&language=en-US&with_genres=${genre}&page=${page}&vote_count.gte=500`;
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <SearchPageStyle>
         <SearchSection />
    <div className="searchResultContainer">
      <h2 className="searchTitle">Let's see what we could find in your chosen genre!</h2>
      <div className="searchCardContainer">
        {isDataAvailable &&
          data.results.map((resultSearch) => {
            return (
              <div className="searchContainerCard">
                <SearchResultCard
                  id={resultSearch.id}
                  key={resultSearch.id}
                  title={resultSearch.title || resultSearch.name}
                  overview={resultSearch.overview}
                  rating={Number(resultSearch.vote_average).toFixed(1)}
                  poster={resultSearch.poster_path}
                  genreOne={resultSearch.genre_ids?resultSearch.genre_ids[0]:""}
                  genreTwo={resultSearch.genre_ids?resultSearch.genre_ids[1]:""}
                  group={resultSearch.media_type === "movie" ? "movie" : "tv"}
                  category={
                    resultSearch.media_type === "movie" ? "movie" : "tv"
                  }
                />
              </div>
            );
          })}
      </div>

      {isDataAvailable && (
        <Stack spacing={2} sx={{ marginBottom: "16px" }}>
          <Pagination
            count={data.total_pages}
            page={page}
            value={page}
            onChange={handleChange}
            size="large"
            sx={{
              ["& .MuiPaginationItem-root.Mui-selected"]: {
                backgroundColor: "#66fcf1",
                color: "#1f2833",
              },
              ["& .MuiPaginationItem-root.Mui-selected:hover"]: {
                backgroundColor: "#45a29e",
                color: "#1f2833",
              },
              ["& .css-rppfq7-MuiButtonBase-root-MuiPaginationItem-root,.MuiPaginationItem-page,.MuiPaginationItem-page,.css-1scal0h-MuiPaginationItem-root"]: {
                color: "var(--overview-color)",
              },
            }}
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </div>
  </SearchPageStyle>
  );
}
