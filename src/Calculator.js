import React, { useState } from "react";
import "./Calculator.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import PercentIcon from "@mui/icons-material/Percent";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Stack, Typography, TextField, Fab } from "@mui/material";
import { Box } from "@mui/system";
import { evaluate } from "mathjs";
import { useSnackbar } from "notistack";

const Calculator = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [disValue, setDisValue] = useState("");
  const calculate = () => {
    try {
      const ans = evaluate(disValue);
      setDisValue(ans);
      console.log(ans);
    } catch (error) {
      enqueueSnackbar(
        "Error!",
        {
          variant: "warning",
        }
      );
      setDisValue("Error");
    }
  };
  console.log(disValue);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="Roboto"
        paddingY={4}
      >
        React-Hooks calculator!
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          border: 2,
          borderRadius: "10px",
          borderColor: "Background",
          padding: "20px",
        }}
      >
        <Stack spacing={2}>
          <TextField
            id="display"
            value={disValue}
            onChange={(e) => setDisValue(e.target.value)}
            minRows={3}
          />

          <Stack direction="row" spacing={2} height={60}>
            <Fab onClick={() => setDisValue(disValue + "7")}>
              <h2>7</h2>
            </Fab>
            <Fab onClick={() => setDisValue(disValue + "8")}>
              <h2>8</h2>
            </Fab>
            <Fab onClick={() => setDisValue(disValue + "9")}>
              <h2>9</h2>
            </Fab>
            <Fab color="secondary" onClick={() => setDisValue(disValue + "/")}>
              <h2>/</h2>
            </Fab>
            <Fab
              color="primary"
              onClick={() => setDisValue(disValue.toString().slice(0, -1))}
            >
              <BackspaceIcon />
            </Fab>
          </Stack>
          <Stack direction="row" spacing={2} height={60}>
            <Fab aria-label="" onClick={() => setDisValue(disValue + "4")}>
              <h2>4</h2>
            </Fab>
            <Fab aria-label="" onClick={() => setDisValue(disValue + "5")}>
              <h2>5</h2>
            </Fab>
            <Fab aria-label="" onClick={() => setDisValue(disValue + "6")}>
              <h2>6</h2>
            </Fab>
            <Fab color="secondary" onClick={() => setDisValue(disValue + "*")}>
              <CloseIcon />
            </Fab>
            <Fab color="primary" onClick={() => setDisValue("")}>
              <h2>Ac</h2>
            </Fab>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2} height={60}>
                <Fab aria-label="" onClick={() => setDisValue(disValue + "1")}>
                  <h2>1</h2>
                </Fab>
                <Fab aria-label="" onClick={() => setDisValue(disValue + "2")}>
                  <h2>2</h2>
                </Fab>
                <Fab aria-label="" onClick={() => setDisValue(disValue + "3")}>
                  <h2>3</h2>
                </Fab>
                <Fab
                  color="secondary"
                  onClick={() => setDisValue(disValue + "-")}
                >
                  <RemoveIcon />
                </Fab>
              </Stack>
              <Stack direction="row" spacing={2} height={60}>
                <Fab aria-label="" onClick={() => setDisValue(disValue + "0")}>
                  <h2>0</h2>
                </Fab>
                <Fab aria-label="" onClick={() => setDisValue(disValue + ".")}>
                  <h2>.</h2>
                </Fab>
                <Fab
                  color="secondary"
                  onClick={() => setDisValue(disValue + "%")}
                >
                  <PercentIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="add"
                  onClick={() => setDisValue(disValue + "+")}
                >
                  <AddIcon />
                </Fab>
              </Stack>
            </Stack>
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Fab
                color="primary"
                onClick={() => calculate()}
                sx={{ height: "100%", borderRadius: "50px" }}
              >
                <h2>=</h2>
              </Fab>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Typography
      variant="h6"
      paddingY={3}>
        If 'Error' clear it before entering any values!.
      </Typography>
    </div>
  );
};

export default Calculator;
