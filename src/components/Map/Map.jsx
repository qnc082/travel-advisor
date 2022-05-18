import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import GoogleMapReact from "google-map-react";
import React from "react";
import useStyles from "./styles";
import Rating from "@material-ui/lab/Rating";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  // const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA92ErQpG1b5FrBNVje2VBNITwMMELMYZ8",
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typograpghy}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  src={place.photo ? place.photo.images.large.url : ""}
                  className={classes.pointer}
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readonly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
