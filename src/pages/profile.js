import { Box, TextField, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import SMInput from "../components/SMInput";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import SMButton from "../components/SMButton";
import SMSwitch from "../components/SMSwitch";
import DataTable from "../components/SMTable";

export default function Profile() {
  const [model, setModel] = useState({});
  const params = useParams();
  const location = useLocation();

  return (
    <>
      <Box>
        <Typography variant="h1">Profile {params.id}</Typography>
        {/* <Box className="p-2">
          <SMInput
            type={"email"}
            label={"email"}
            onChange={(e) => fillModel("email", e.target.value)}
          />
        </Box> */}
      </Box>
    </>
  );
}
