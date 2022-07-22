import React from "react";
import Navbar from "../components/Navigation/Navbar";
import {
  Box,
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

const Projects = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAge(event.target.value);
  };

  const projectsData: Projects = projectData;

  return (
    <Box
      sx={{
        background: "linear-gradient(200deg, rgba(20,39,78,1) 35%, rgba(57,72,103,1) 100%)",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "auto",

          paddingTop: 10,
          paddingLeft: 36,
          paddingRight: 36,
        }}
      >
        <Grid container xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                color: "#F1F6F9",
                fontSize: 48,
                flexGrow: 1,
              }}
              variant={"h1"}
            >
              Projects
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 410,
                marginRight: "34px",
              }}
            >
              <TextField
                sx={{
                  background: "white",
                  marginRight: "6px",
                  borderRadius: "4px",
                }}
                variant={"filled"}
                size={"small"}
                id="outlined-select-currency"
                select
                label="Sort by phase"
                value={age}
                onChange={handleChange}
                fullWidth
                // helperText="Please select your currency"
              >
                <MenuItem value={10}>Ascending</MenuItem>
                <MenuItem value={20}>Descending</MenuItem>
              </TextField>
              <TextField
                sx={{ background: "white", borderRadius: "4px" }}
                variant={"filled"}
                size={"small"}
                id="outlined-select-currency"
                select
                label="Sort by member count"
                value={age}
                onChange={handleChange}
                fullWidth
                // helperText="Please select your currency"
              >
                <MenuItem value={10}>Ascending</MenuItem>
                <MenuItem value={20}>Descending</MenuItem>
              </TextField>
            </Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            marginTop: "20px",
            // paddingLeft: '100px',
            // paddingRight: '100px',
          }}
          xs={12}
        >
          <Divider sx={{ background: "#394867" }} />
        </Grid>
        <Grid
          sx={{
            marginTop: 2,
            paddingBottom: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
          // spacing={4}
          container
          xs={12}
        >
          {projectsData.projects.map((project) => (
            <Grid key={project.id} item xs={4}>
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
      </Box>
    </Box>
  );
};

export default Projects;
