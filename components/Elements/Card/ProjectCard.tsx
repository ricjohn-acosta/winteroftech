import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import {
  Chat,
  Favorite,
  HearingTwoTone,
  IosShare,
  Shortcut,
  TrendingFlat,
} from "@mui/icons-material";

interface Props {
  name: string;
  description: string;
  phase: string;
  userCount: number;
  maxMembers: number;
  techStack: string[];
}

const ProjectCard = ({ name, description, phase, userCount, techStack }: Props) => {
  return (
    <Box sx={{ padding: "34px" }}>
      <Card
        sx={{
          // background: "#242526",
          boxShadow: "none",
          background: "transparent",
          minWidth: 300,
          // borderRadius: "12px",
          borderBottomWidth: "1px",
          borderBottomColor: "#3e4042",
          borderBottomStyle: "solid",
        }}
        // elevation={12}
      >
        <CardContent sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Avatar sx={{ width: 56, height: 56 }} />
            <Box sx={{ marginLeft: "12px" }}>
              <Typography variant={"body1"} sx={{ color: "#F1F6F9", fontWeight: "bolder" }}>
                Ricjohn <span style={{ color: "#9BA4B4" }}>is looking for members!</span>
              </Typography>
              <Typography variant={"body2"} sx={{ color: "#9BA4B4" }}>
                Beginner
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontWeight: "bolder", color: "#F1F6F9" }} variant="h5" component="div">
            {name}
          </Typography>
          <Chip
            sx={{ background: "#fdfd96", height: "24px", marginTop: "4px", marginBottom: "12px" }}
            label={
              <Typography variant={"body2"} sx={{ fontWeight: "bold", fontSize: "12px" }}>
                {phase}
              </Typography>
            }
          />
          <Typography variant={"body1"} sx={{ mb: 1.5, color: "#9BA4B4" }} color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ display: "flex", marginTop: "50px", alignItems: "center" }}>
            <Tooltip title={"Frontend developer"} placement={"top"} arrow>
              <PersonIcon sx={{ color: "#F1F6F9" }} />
            </Tooltip>
            <Tooltip title={"Backend developer"} placement={"top"} arrow>
              <PersonIcon sx={{ color: "#F1F6F9" }} />
            </Tooltip>
            <Tooltip title={"Fullstack developer"} placement={"top"} arrow>
              <PersonIcon sx={{ color: "#F1F6F9" }} />
            </Tooltip>
            <Tooltip title={"Vacant"} placement={"top"} arrow>
              <PersonIcon sx={{ color: "grey" }} />
            </Tooltip>
            <Tooltip title={"Vacant"} placement={"top"} arrow>
              <PersonIcon sx={{ color: "grey" }} />
            </Tooltip>{" "}
            {/*<Typography*/}
            {/*  sx={{*/}
            {/*    color: '#F1F6F9',*/}
            {/*    marginLeft: '8px',*/}
            {/*    fontWeight: 'bold',*/}
            {/*    fontSize: '14px',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  3/5*/}
            {/*</Typography>*/}
          </Box>
          <Box sx={{ marginTop: "8px" }}>
            {techStack.map((tech, index) => (
              <Chip
                key={`${tech}-${index}`}
                variant={"outlined"}
                sx={{
                  height: "24px",
                  marginRight: "4px",
                  color: "white",
                  background: "#a7c3ff73",
                  borderRadius: "4px",
                  borderColor: "#F1F6F9",
                }}
                label={
                  <Typography
                    variant={"body2"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "10px",
                    }}
                  >
                    {tech}
                  </Typography>
                }
              />
            ))}
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            marginTop: "10px",
            padding: "0 0 8px 0",
            // borderTopWidth: "1px",
            // borderTopColor: "#3e4042",
            // borderTopStyle: "solid",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                marginRight: "8px",
                borderRadius: "4px",
                fontWeight: "bolder",
                color: "#F1F6F9",

                "&:hover": {
                  background: "#394867",
                },
              }}
              // variant={"outlined"}
              startIcon={<Favorite />}
            >
              128
            </Button>
            <IconButton
              sx={{
                marginRight: "8px",
                borderRadius: "4px",
                fontWeight: "bolder",
                color: "#F1F6F9",

                "&:hover": {
                  background: "#394867",
                },
              }}
              // variant={"outlined"}
            >
              <Shortcut />
            </IconButton>{" "}
            <IconButton
              sx={{
                marginRight: "8px",
                borderRadius: "4px",
                fontWeight: "bolder",
                color: "#F1F6F9",

                "&:hover": {
                  background: "#394867",
                },
              }}
              // variant={"outlined"}
            >
              <Chat />
            </IconButton>
          </Box>

          <Box style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{
                fontWeight: "bolder",
                color: "#F1F6F9",
                background: "#394867",
                borderColor: "transparent",
                "&:hover": {
                  borderColor: "#3e4042",
                },
                // background: "#F1F6F9",
              }}
              variant={"outlined"}
              startIcon={<TrendingFlat />}
            >
              Join project
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
