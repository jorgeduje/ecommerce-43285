import {
  Avatar,
  Badge,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ShoppingCart,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";

const ProbandoComponents = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{paddingTop: "50px"}}>
      {/* <Button color="secondary" variant="contained" >Sumar</Button>


      <Button startIcon={<DeleteIcon />} >
        Borrar
      </Button> */}

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff color="primary" />
                ) : (
                  <Visibility color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      {/* <Avatar alt="Remy Sharp" src="" /> */}


      <Badge badgeContent={41} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </div>
  );
};

export default ProbandoComponents;
