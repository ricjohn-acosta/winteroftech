import React from "react";
import Navbar from "../components/Navigation/Navbar";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ProjectCard from "../components/Elements/Card/ProjectCard";
import projectData from "../utils/projects.json";
import { Projects } from "../types";
import TabNavigator from "../components/Navigation/TabNavigator";

const Projects = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAge(event.target.value);
  };

  const projectsData: Projects = projectData;

  return (
    <Box
      sx={{
        // background: "linear-gradient(200deg, rgba(20,39,78,1) 35%, rgba(57,72,103,1) 100%)",
        background: "#18191a",
      }}
    >
      <Navbar />
      <TabNavigator />
      <Box
        sx={{
          height: "auto",
          paddingTop: 4,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Grid container direction={"row"}>
          <Grid
            sx={{
              marginTop: 2,
              paddingBottom: 4,
              justifyContent: "center",
              alignItems: "center",
              background: "#242526",
              borderRadius: "8px",
              borderRightStyle: "solid",
              borderRightWidth: "1px",
              borderRightColor: "#3e4042",
            }}
            // spacing={4}
            container
            xs={8}
          >
            <Grid container sx={{ padding: "34px" }}>
              <Box sx={{ width: "100%", display: "flex" }}>
                <Avatar sx={{ width: 56, height: 56 }} />
                <Box sx={{ width: "100%", marginLeft: "12px" }}>
                  <TextField
                    size={"medium"}
                    placeholder={"Share a post"}
                    variant={"outlined"}
                    sx={{
                      // background: "white",
                      // "&.MuiTextField-root": { background: "yellow" },
                      "& .MuiOutlinedInput-root": {
                        background: "#d5d5d5",
                        "& fieldset": {
                          borderColor: "#14274E",
                        },
                        "&:hover fieldset": {
                          borderColor: "#394867",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#14274E",
                        },
                      },
                    }}
                    fullWidth
                  />
                  <Box sx={{ width: "100%", marginTop: "8px", display: "flex" }}>
                    <Button
                      sx={{
                        margin: "4px",
                        fontWeight: "bolder",
                        color: "#F1F6F9",
                        borderColor: "#3e4042",
                        "&:hover": {
                          background: "#394867",
                          borderColor: "transparent",
                        },
                        borderRadius: "4px",
                        textTransform: "none",
                      }}
                      variant={"outlined"}
                      fullWidth
                    >
                      Host a project
                    </Button>
                    <Button
                      sx={{
                        margin: "4px",
                        fontWeight: "bolder",
                        color: "#F1F6F9",
                        borderColor: "#3e4042",
                        "&:hover": {
                          background: "#394867",
                          borderColor: "transparent",
                        },
                        borderRadius: "4px",
                        textTransform: "none",
                      }}
                      variant={"outlined"}
                      fullWidth
                    >
                      Recruit people
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Divider
                sx={{
                  "&::before, &::after": {
                    borderColor: "#3e4042",
                  },
                }}
                textAlign={"right"}
              >
                <Typography sx={{ color: "#F1F6F9" }} variant={"body2"}>
                  <span style={{ color: "#9BA4B4" }}>Sort by:</span>{" "}
                  <span style={{ fontWeight: "bold" }}>Newest</span>
                </Typography>
              </Divider>
            </Box>
            {projectsData.projects.map((project) => (
              <Grid key={project.id} item xs={12}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  phase={project.phase}
                  userCount={project.users.length}
                  maxMembers={project.maxMembers}
                  techStack={project.techStack}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            sx={{
              marginTop: 2,
              paddingBottom: 4,
            }}
            container
            xs={4}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginLeft: 2,
                background: "#242526",
                borderRadius: "8px",
                borderLeftStyle: "solid",
                borderLeftWidth: "1px",
                borderLeftColor: "#3e4042",
              }}
            >
              {/*<Typography*/}
              {/*  sx={{*/}
              {/*    fontWeight: "bolder",*/}
              {/*    color: "#F1F6F9",*/}
              {/*    fontSize: 48,*/}
              {/*    flexGrow: 1,*/}
              {/*  }}*/}
              {/*  variant={"h1"}*/}
              {/*>*/}
              {/*  Projects*/}
              {/*</Typography>*/}
              {/*<Box*/}
              {/*  sx={{*/}
              {/*    display: "flex",*/}
              {/*    alignItems: "center",*/}
              {/*    minWidth: 410,*/}
              {/*    marginRight: "34px",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <TextField*/}
              {/*    sx={{*/}
              {/*      background: "white",*/}
              {/*      marginRight: "6px",*/}
              {/*      borderRadius: "4px",*/}
              {/*    }}*/}
              {/*    variant={"filled"}*/}
              {/*    size={"small"}*/}
              {/*    id="outlined-select-currency"*/}
              {/*    select*/}
              {/*    label="Sort by phase"*/}
              {/*    value={age}*/}
              {/*    onChange={handleChange}*/}
              {/*    fullWidth*/}
              {/*    // helperText="Please select your currency"*/}
              {/*  >*/}
              {/*    <MenuItem value={10}>Ascending</MenuItem>*/}
              {/*    <MenuItem value={20}>Descending</MenuItem>*/}
              {/*  </TextField>*/}
              {/*  <TextField*/}
              {/*    sx={{ background: "white", borderRadius: "4px" }}*/}
              {/*    variant={"filled"}*/}
              {/*    size={"small"}*/}
              {/*    id="outlined-select-currency"*/}
              {/*    select*/}
              {/*    label="Sort by member count"*/}
              {/*    value={age}*/}
              {/*    onChange={handleChange}*/}
              {/*    fullWidth*/}
              {/*    // helperText="Please select your currency"*/}
              {/*  >*/}
              {/*    <MenuItem value={10}>Ascending</MenuItem>*/}
              {/*    <MenuItem value={20}>Descending</MenuItem>*/}
              {/*  </TextField>*/}
              {/*</Box>*/}
            </Box>
          </Grid>
          {/*<Grid*/}
          {/*  sx={{*/}
          {/*    marginTop: "20px",*/}
          {/*    // paddingLeft: '100px',*/}
          {/*    // paddingRight: '100px',*/}
          {/*  }}*/}
          {/*  xs={12}*/}
          {/*>*/}
          {/*  <Divider sx={{ background: "#394867" }} />*/}
          {/*</Grid>*/}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
