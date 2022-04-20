import { Card, Stack, styled } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)(({ theme, mycolor }) => {
  return {
    padding: 40,
  };
});

export const SideDetails = ({ user }) => {
  return (
    <div className="side-panel">
      <StyledCard>
        <div>
          <div>
            <div className="side-panel-start-div">
              <img className="avtar" alt="" src={user.avatar} />
              <div className="name">
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>@{user.first_name}</p>
              </div>
            </div>
            <Stack direction="row" spacing={2}>
              <div
                mycolor={
                  user.id % 2
                    ? { bg: "rgba(40, 199, 111, 0.12)", text: "#28C76F" }
                    : user.id % 3
                    ? { bg: "rgba(108, 117, 125, 0.12)", text: "#6C757D" }
                    : user.id % 5
                    ? { bg: "rgba(255, 159, 67, 0.12)", text: "#FF9F43" }
                    : "NA"
                }
              >
                <h3>Status</h3>
                {user.id % 2
                  ? "Active"
                  : user.id % 3
                  ? "Inactive"
                  : user.id % 5
                  ? "Removed"
                  : "NA"}
              </div>
              <div>
                <h3>Email</h3>

                {user.email}
              </div>
            </Stack>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            nisl pretium fusce id. Urna duis convallis convallis tellus id
            interdum.
          </p>
        </div>
        <div className="modal-footer"></div>
      </StyledCard>
    </div>
  );
};
