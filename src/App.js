import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [sourceTempratureUnit, setSourceTempratureUnit] = React.useState("");
  const [targetTempratureUnit, setTargetTempratureUnit] = React.useState("");
  const [sourceLiquidUnit, setSourceLiquidUnit] = React.useState("");
  const [targetLiquidUnit, setTargetLiquidUnit] = React.useState("");
  const [inputValue, setInputValue] = React.useState(0);
  const [studentValue, setStudentValue] = React.useState("");
  const [studentValueLiquid, setStudentValueLiquid] = React.useState("");
  const [tempCalResult, setTempCalResult] = React.useState(0);
  const [tempCalResultLiquid, setTempCalResultLiquid] = React.useState(0);
  const [resultInputValue, setResultInputValue] = React.useState("");
  const [resultInputValueLiquid, setResultInputValueLiquid] =
    React.useState("");
  const [inputValueLiter, setInputValueLiter] = React.useState(0);
  const [invalidTemperatureFlag, setInvalidTemperatureFlag] =
    React.useState(false);
  const [invalidTempErrorMessage, setInvalidTempErrorMessage] =
    React.useState("");
  const [invalidLiqErrorMessage, setInvalidLiqErrorMessage] =
    React.useState("");
  const [invalidLiquidFlag, setInvalidLiquidFlag] = React.useState(false);

  //const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {}, []);
  const handleSourceTemratureUnitChange = (event) => {
    setSourceTempratureUnit(event.target.value);
    tempratureConvertionCalculation(event.target.value, "source");
  };
  const handleTargetTemratureUnitChange = (event) => {
    setTargetTempratureUnit(event.target.value);
    tempratureConvertionCalculation(event.target.value, "target");
  };

  const handleSourceLiquidUnitChange = (event) => {
    setSourceLiquidUnit(event.target.value);
    liquidConvertionCalculation(event.target.value, "source");
  };
  const handleTargetLiquidUnitChange = (event) => {
    setTargetLiquidUnit(event.target.value);
    liquidConvertionCalculation(event.target.value, "target");
  };

  const handleChangeInputVal = (event) => {
    setInputValue(event.target.value);
    if (!event.target.value.trim("")) {
      setInvalidTemperatureFlag(true);
      setInvalidTempErrorMessage("Enter valid input");
    } else {
      setInvalidTemperatureFlag(false);
    }
  };
  const handleChangeStudentInputValLiquid = (event) => {
    if (!event.target.value.trim("")) {
      setInvalidLiquidFlag(true);
      setInvalidLiqErrorMessage("Enter some student input");
    } else {
      setInvalidLiquidFlag(false);
    }
    setStudentValueLiquid(event.target.value);
    if (tempCalResultLiquid === parseFloat(event.target.value)) {
      setResultInputValueLiquid("Correct");
    } else {
      setResultInputValueLiquid("InCorrect");
    }
  };
  const handleChangeStudentInputVal = (event) => {
    console.log("testtstststtsytystydtysdt");
    if (!event.target.value.trim("")) {
      setInvalidTemperatureFlag(true);
      setInvalidTempErrorMessage("Enter some student input");
    } else {
      setInvalidTemperatureFlag(false);
    }
    setStudentValue(event.target.value);
    if (tempCalResult === parseFloat(event.target.value)) {
      setResultInputValue("Correct");
    } else {
      setResultInputValue("InCorrect");
    }
  };

  const handleChangeInputValLiquid = (event) => {
    setInputValueLiter(event.target.value);
    if (!event.target.value.trim("")) {
      setInvalidLiquidFlag(true);
      setInvalidLiqErrorMessage("Enter valid input");
    } else {
      setInvalidLiquidFlag(false);
    }
  };

  const tempratureConvertionCalculation = (value, from) => {
    let tempUnit =
        from === "source"
          ? `${value}_${targetTempratureUnit}`
          : `${sourceTempratureUnit}_${value}`,
      result = 0;
    if (inputValue.toString().trim("")) {
      switch (tempUnit) {
        case "Kelvin_Celsius":
          result = parseFloat(inputValue) - 273.15;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Kelvin_Fahrenheit":
          result = ((parseFloat(inputValue) - 273.15) * 9) / 5 + 32;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Kelvin_Rankine":
          result = 1.8 * parseFloat(inputValue);
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Celsius_Kelvin":
          result = parseFloat(inputValue) + 273.15;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Celsius_Fahrenheit":
          result = (parseFloat(inputValue) * 9) / 5 + 32;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Celsius_Rankine":
          result = (parseFloat(inputValue) * 9) / 5 + 491.67;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Rankine_Kelvin":
          result = (parseFloat(inputValue) * 5) / 9;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Rankine_Fahrenheit":
          result = parseFloat(inputValue) - 459.67;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Rankine_Celsius":
          result = ((parseFloat(inputValue) - 491.67) * 5) / 9;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Fahrenheit_Rankine":
          result = parseFloat(inputValue) + 459.67;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Fahrenheit_Celsius":
          result = ((parseFloat(inputValue) - 32) * 5) / 9;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        case "Fahrenheit_Kelvin":
          result = ((parseFloat(inputValue) - 32) * 5) / 9 + 273.15;
          setTempCalResult(parseFloat(result.toFixed(1)));
          setInvalidTemperatureFlag(false);
          break;
        default:
          setInvalidTemperatureFlag(true);
          setInvalidTempErrorMessage("Select valid source and target unit");
          break;
      }
    }
  };

  const liquidConvertionCalculation = (value, from) => {
    let liquidMeasureUnit =
        from === "source"
          ? `${value}_${targetLiquidUnit}`
          : `${sourceLiquidUnit}_${value}`,
      result = 0;
    switch (liquidMeasureUnit) {
      case "liters_tablespoons":
        result = parseFloat(inputValueLiter) * 67.628;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "liters_cubic-inches":
        result = parseFloat(inputValueLiter) * 61.024;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "liters_cups":
        result = parseFloat(inputValueLiter) * 4.167;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "liters_cubic-feet":
        result = parseFloat(inputValueLiter) / 28.317;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "liters_gallons":
        result = parseFloat(inputValueLiter) / 3.785;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "tablespoons_liters":
        result = parseFloat(inputValueLiter) / 67.628;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "tablespoons_ cubic-inches":
        result = parseFloat(inputValueLiter) / 1.108;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "tablespoons_cups":
        result = parseFloat(inputValueLiter) / 16.231;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "tablespoons_cubic-feet":
        result = parseFloat(inputValueLiter) / 1915;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "tablespoons_gallons":
        result = parseFloat(inputValueLiter) / 256;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-inches_liters":
        result = parseFloat(inputValueLiter) / 61.024;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-inches_tablespoons":
        result = parseFloat(inputValueLiter) * 1.108;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-inches_cups":
        result = parseFloat(inputValueLiter) / 14.646;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-inches_cubic-feet":
        result = parseFloat(inputValueLiter) / 1728;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-inches_gallons":
        result = parseFloat(inputValueLiter) / 231;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cups_liters":
        result = parseFloat(inputValueLiter) / 4.167;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cups_tablespoons":
        result = parseFloat(inputValueLiter) * 16.231;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cups_cubic-inches":
        result = parseFloat(inputValueLiter) * 14.646;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cups_cubic-feet":
        result = parseFloat(inputValueLiter) / 118;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cups_gallons":
        result = parseFloat(inputValueLiter) / 15.773;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-feet_liters":
        result = parseFloat(inputValueLiter) * 28.317;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-feet_tablespoons":
        result = parseFloat(inputValueLiter) * 1915;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-feet_cubic-inches":
        result = parseFloat(inputValueLiter) * 1728;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-feet_cups":
        result = parseFloat(inputValueLiter) * 118;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "cubic-feet_gallons":
        result = parseFloat(inputValueLiter) * 7.481;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "gallons_liters":
        result = parseFloat(inputValueLiter) * 3.785;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "gallons_tablespoons":
        result = parseFloat(inputValueLiter) * 256;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "gallons_cubic-inches":
        result = parseFloat(inputValueLiter) * 231;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "gallons_cups":
        result = parseFloat(inputValueLiter) * 15.773;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      case "gallons_cubic-feet":
        result = parseFloat(inputValueLiter) / 7.481;
        setTempCalResultLiquid(parseFloat(result.toFixed(1)));
        setInvalidLiquidFlag(false);
        break;
      default:
        setInvalidLiquidFlag(true);
        setInvalidLiqErrorMessage("Select valid source and target unit");
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2} md={2}>
          <Item>Input Numerical Value</Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>Input Unit of Measure</Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>Target Unit of Measure</Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>Student Response</Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>Output</Item>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={2} md={2}>
          <Item>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={inputValue}
              onChange={handleChangeInputVal}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={sourceTempratureUnit}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleSourceTemratureUnitChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Kelvin"}>Kelvin</MenuItem>
              <MenuItem value={"Celsius"}>Celsius</MenuItem>
              <MenuItem value={"Fahrenheit"}>Fahrenheit</MenuItem>
              <MenuItem value={"Rankine"}>Rankine</MenuItem>
            </Select>
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={targetTempratureUnit}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleTargetTemratureUnitChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Kelvin"}>Kelvin</MenuItem>
              <MenuItem value={"Celsius"}>Celsius</MenuItem>
              <MenuItem value={"Fahrenheit"}>Fahrenheit</MenuItem>
              <MenuItem value={"Rankine"}>Rankine</MenuItem>
            </Select>
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={studentValue}
              onChange={handleChangeStudentInputVal}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            {" "}
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue=""
              value={resultInputValue}
              InputProps={{
                readOnly: true,
              }}
            />
          </Item>
        </Grid>
        {invalidTemperatureFlag && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{`This is an error alert — ${invalidTempErrorMessage}! `}</Alert>
          </Stack>
        )}
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={2} md={2}>
          <Item>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={inputValueLiter}
              onChange={handleChangeInputValLiquid}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={sourceLiquidUnit}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleSourceLiquidUnitChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"liters"}>Liters</MenuItem>
              <MenuItem value={"tablespoons"}>Tablespoons</MenuItem>
              <MenuItem value={"cubic-inches"}>Cubic-inches</MenuItem>
              <MenuItem value={"cups"}>Cups</MenuItem>
              <MenuItem value={"cubic-feet"}>Cubic-feet</MenuItem>
              <MenuItem value={"gallons"}>Gallons</MenuItem>
            </Select>
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={targetLiquidUnit}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleTargetLiquidUnitChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"liters"}>Liters</MenuItem>
              <MenuItem value={"tablespoons"}>Tablespoons</MenuItem>
              <MenuItem value={"cubic-inches"}>Cubic-inches</MenuItem>
              <MenuItem value={"cups"}>Cups</MenuItem>
              <MenuItem value={"cubic-feet"}>Cubic-feet</MenuItem>
              <MenuItem value={"gallons"}>Gallons</MenuItem>
            </Select>
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={studentValueLiquid}
              onChange={handleChangeStudentInputValLiquid}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>
            {" "}
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue=""
              value={resultInputValueLiquid}
              InputProps={{
                readOnly: true,
              }}
            />
          </Item>
        </Grid>
        {invalidLiquidFlag && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{`This is an error alert — ${invalidLiqErrorMessage}! `}</Alert>
          </Stack>
        )}
      </Grid>
    </div>
  );
}

export default App;
