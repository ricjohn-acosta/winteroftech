import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Tooltip,
  Typography,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';

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
    <Box sx={{ padding: '10px' }}>
      <Card sx={{ background: '#394867', minWidth: 300, borderRadius: '12px' }} elevation={20}>
        <CardContent sx={{ height: 300 }}>
          <Chip
            sx={{ background: '#fdfd96', marginBottom: '30px' }}
            label={
              <Typography variant={'body2'} sx={{ fontWeight: 'bold', fontSize: '12px' }}>
                {phase}
              </Typography>
            }
          />
          <Typography sx={{ fontWeight: 'bolder', color: '#F1F6F9' }} variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5, color: '#9BA4B4' }} color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ display: 'flex', marginTop: '50px', alignItems: 'center' }}>
            <Tooltip title={'Frontend developer'} placement={'top'} arrow>
              <PersonIcon sx={{ color: '#F1F6F9' }} />
            </Tooltip>
            <Tooltip title={'Backend developer'} placement={'top'} arrow>
              <PersonIcon sx={{ color: '#F1F6F9' }} />
            </Tooltip>
            <Tooltip title={'Fullstack developer'} placement={'top'} arrow>
              <PersonIcon sx={{ color: '#F1F6F9' }} />
            </Tooltip>
            <Tooltip title={'Vacant'} placement={'top'} arrow>
              <PersonIcon sx={{ color: 'grey' }} />
            </Tooltip>
            <Tooltip title={'Vacant'} placement={'top'} arrow>
              <PersonIcon sx={{ color: 'grey' }} />
            </Tooltip>{' '}
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
          <Box sx={{ marginTop: '8px' }}>
            {techStack.map((tech, index) => (
              <Chip
                key={`${tech}-${index}`}
                variant={'outlined'}
                sx={{
                  height: '24px',
                  marginRight: '4px',
                  color: 'white',
                  background: '#a7c3ff73',
                  borderRadius: '4px',
                  borderColor: '#F1F6F9',
                }}
                label={
                  <Typography
                    variant={'body2'}
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '10px',
                    }}
                  >
                    {tech}
                  </Typography>
                }
              />
            ))}
            <Chip
              variant={'outlined'}
              sx={{
                height: '24px',
                marginRight: '4px',
                color: 'white',
                background: '#a7c3ff73',
                borderRadius: '4px',
                borderColor: '#F1F6F9',
              }}
              label={
                <Typography
                  variant={'body2'}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '10px',
                  }}
                >
                  REACT
                </Typography>
              }
            />
            <Chip
              variant={'outlined'}
              sx={{
                height: '24px',
                marginRight: '4px',
                color: 'white',
                background: '#a7c3ff73',
                borderRadius: '4px',
                borderColor: '#F1F6F9',
              }}
              label={
                <Typography
                  variant={'body2'}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '10px',
                  }}
                >
                  TYPESCRIPT
                </Typography>
              }
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            size={'small'}
            sx={{
              fontWeight: 'bolder',
              color: '#14274E',
              '&:hover': {
                color: '#F1F6F9',
                background: '#394867',
              },
              background: '#F1F6F9',
            }}
            variant={'contained'}
            fullWidth
          >
            Join project
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
