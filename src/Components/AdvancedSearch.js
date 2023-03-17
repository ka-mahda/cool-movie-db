import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GenreMovieSearch from "./GenreMovieSearch";
import GenreTVSearch from "./GenreTVSearch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../Styles/AdvancedSearchStyle.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let params = useParams();
  let [genre, setGenre] = useState(params.genre);
  let handleGenre = (e) => setGenre(e.target.value);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#45a29e",
        display: "flex",
        height: 180,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          ["& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected"]: {
            color: "#fff",
            fontWeight: "bold",
          },
          ["& .css-10d9dml-MuiTabs-indicator"]: {
            backgroundColor: "#fff !important",
          }
        }}
      >
        <Tab label="Movie" {...a11yProps(0)} />
        <Tab label="TV" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          <GenreMovieSearch
            handleGenre={handleGenre}
            value={genre}
            group="movie"
          />
          <Link to={`/movieGenres/${genre}`}>
            <Button className="genreSelectorBtn">Let's See What I Find!</Button>
          </Link>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
        <GenreTVSearch handleGenre={handleGenre} value={genre} group="movie" />
        <Link to={`/tvGenres/${genre}`} style={{margin:"auto"}}>
          <Button className="genreSelectorBtn">Let's See What I Find!</Button>
        </Link>
        </div>
      </TabPanel>
    </Box>
  );
}
//css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected
