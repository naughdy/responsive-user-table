import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const BootstrapButton = styled(Button)({
  backgroundColor: "cyan",
  fontWeight: "bold",
});

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7367F0",
  fontWeight: "bold",
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>
        Email
      </BootstrapButton>
      <ColorButton variant="contained">Phone</ColorButton>
    </Stack>
  );
}
