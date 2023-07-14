import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import "./App.css";

const ActivitiesList = ({ activities }) => {
  return (
    <div>
      <Typography variant="h5">Upcoming Events</Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem
            key={index}
            alignItems="flex-start"
            className="each-item-upcoming"
          >
            <ListItemText
              className="header-list"
              primary={activity.ActivityName}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Location: {activity.Location}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Date: {activity.Date}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Time: {activity.Time}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Description: {activity.Description}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Link: {activity.Link}
                  </Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Contact Info: {activity.ContactInfo}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ActivitiesList;
