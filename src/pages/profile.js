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
  // console.log(location.state);

  const fillModel = (key, val) => {
    model[key] = val;
    console.log(model);
  };

  const handleSwitch = (p) => {
    console.log(p, "switch");
  };
  const columns = [
    { field: "email", headerName: "PASSWORD", width: 300 },
    { field: "password", headerName: "NAME", width: 300 },
  ]; // for ex col data
  const rows = [{ id: "", password: model.password, email: model.email }]; // for ex row data

  const handelClick = () => {
    setModel({ ...model });
  };
  return (
    <>
      <Box>
        <Typography variant="h1">Profile {params.id}</Typography>
        <Box className="p-2">
          <SMInput
            type={"email"}
            label={"email"}
            onChange={(e) => fillModel("email", e.target.value)}
          />
          <br />
          <SMInput
            type={"password"}
            label={"password"}
            onChange={(e) => fillModel("password", e.target.value)}
          />
          <br />
          <SMButton
            label={"Login"}
            onClick={() => handelClick()}
            variant={"contained"}
          />
          <SMSwitch onChange={(e) => handleSwitch(e.target.value)} />
          <DataTable columns={columns} rows={rows} />
        </Box>
      </Box>
    </>
  );
}
