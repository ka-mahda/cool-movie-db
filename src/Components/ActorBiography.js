import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseApiUrl, generalProfilePath } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import useFetch from "../API/FetchUrl";
import ActorFilmography from "./ActorFilmography";
import ActorBiographyStyle from "../Styles/ActorBiographyStyle"

export default function ActorBiography() {
  let param = useParams();
  let url = `${baseApiUrl}/person/${param.id}?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);
  let availibilityDataRecieved = !loading && !error && !!data;
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    availibilityDataRecieved && (
      <ActorBiographyStyle>
        <section className="titleNameOfActor">
          <h2>Let's know more about <span>{data.name}</span></h2>
        </section>
        <section className="actorInfo">
          <div className="actorData">
            <img src={generalProfilePath + data.profile_path} alt="profile" />
            <h4>{data.name}</h4>
            <ul>
              <li>
                <h5>Date of Birth: </h5>
                <span>{data.birthday}</span>
              </li>
              <li>
                <h5>Place of Birth: </h5>
                <span>{data.place_of_birth}</span>
              </li>
              {/* <li>
                <b>known For Department: </b>
                <span>{data.known_for_department}</span>
              </li> */}
            </ul>
          </div>
          <div className="actorBio">
            <h4>{data.name}</h4>
            <p>{data.biography}</p>
          </div>
        </section>
        <section className="actorFilmography">
          <h3 className="filmography">Filmography</h3>
          <div className="filmographyCard">
          <ActorFilmography />
          </div>
         
        </section>
      </ActorBiographyStyle>
    )
  );
}
