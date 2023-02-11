import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/SearchStyle.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Search() {
  let [result, setResult] = useState("");
  const navigate = useNavigate();

  return (
    <section className="searchSection">
      <div className="searchContent">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setResult(e.target.value);
            navigate(`/search/${result}`);
          }}
        >
          <div className="searchBox">
            <SearchIcon
              sx={{ color: "#66fcf1", fontSize: "2.5rem", paddingTop: "6px" }}
            />
            <input
              type={"text"}
              placeholder="tell me what are you looking for..."
              id="search"
              onChange={(e) => {
                setResult(e.target.value);
              }}
              value={result}
            ></input>
          </div>
        </form>
        <Link to={`/search/${result}`}>
          <Button variant="outlined">Let's See What I Find!</Button>
        </Link>
      </div>
    </section>
  );
}
