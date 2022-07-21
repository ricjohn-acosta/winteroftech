import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { css } from '@emotion/react'
import { Button, Divider, Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const matches = useMediaQuery('(min-width:1200px)')
  const router = useRouter()

  return (
    <>
      <Box
        sx={{
          // height: '100vh',
          color: 'white',
          background:
            'linear-gradient(180deg, rgba(20,39,78,1) 50%, rgba(57,72,103,1) 95%)',
        }}
      >
        <Grid container xs={12} direction={matches ? 'row' : 'column'}>
          <Grid item container xs={6}>
            <Grid
              css={css(`
                padding-left: 90px;
                padding-right: 90px;
                @media (max-width: 600px) {
                    padding-left: 20px;
                    padding-right: 20px;
                }
              `)}
              item
              xs={12}
            >
              <img src={'/images/winteroftech-logo.png'} height={212} />
              <Typography
                sx={{
                  paddingTop: 4,
                  fontWeight: 'bolder',
                  color: '#F1F6F9',
                  fontSize: 48,
                }}
                variant={'h1'}
                component="h1"
              >
                <span css={css(`color: #8eb3ff`)}>Build your portfolio</span>{' '}
                with friends
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bolder',
                  color: '#F1F6F9', // fontSize: 48,
                }}
                variant={'h1'}
                component="h1"
              >
                <span css={css(`color: #8eb3ff`)}>Gain experience</span> working
                in a team.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 'bolder',
                  color: '#F1F6F9',
                  fontSize: 48,
                }}
                variant={'h1'}
                component="h1"
              >
                <span css={css(`color: #8eb3ff`)}>Earn rewards</span> along the
                way.
              </Typography>
              <Typography sx={{ color: '#9BA4B4' }}>
                It can be daunting to tackle on a project by yourself especially
                if you're new to tech. Winter of Tech aims to connect people who
                want to get in the tech industry together to build fun projects
                that they can add to their portfolios making them more
                marketable as a job seeker.
              </Typography>
              <Grid
                item
                container
                xs={12}
                css={css(`
                display: flex;
                padding-top: 40px;
                flex-direction: column;
                padding-left: 90px;
                padding-right: 90px;
                padding-bottom: 50px;
                @media (max-width: 600px) {
                    padding-left: 0;
                    padding-right: 0;
                }
              `)}
                // sx={{
                //   // paddingTop: 12,
                //   // paddingLeft: 20,
                //   // paddingRight: 20,
                //   display: 'flex',
                //   flexDirection: 'column',
                // }}
              >
                <Grid item>
                  <Button
                    onClick={() => router.push('/projects')}
                    sx={{
                      boxShadow: '0px 4px 12px rgb(149 185 193 / 60%)',
                      fontWeight: 'bolder',
                      color: '#14274E',
                      '&:hover': {
                        color: '#F1F6F9',
                        background: '#394867',
                      },
                      background: '#F1F6F9',
                      borderRadius: 20,
                      height: 48,
                    }}
                    variant={'contained'}
                    fullWidth
                  >
                    Find a project!
                  </Button>
                </Grid>
                <Grid item>
                  <Divider
                    sx={{
                      '&::before, &::after': {
                        borderColor: '#394867',
                      },
                      margin: 2,
                    }}
                  >
                    <Typography sx={{ color: '#9BA4B4' }}>or</Typography>
                  </Divider>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      boxShadow: '0px 4px 12px rgb(149 185 193 / 60%)',
                      fontWeight: 'bolder',
                      color: '#14274E',
                      '&:hover': {
                        color: '#F1F6F9',
                        background: '#394867',
                      },
                      background: '#F1F6F9',
                      borderRadius: 20,
                      height: 48,
                    }}
                    variant={'contained'}
                    fullWidth
                  >
                    Start a project
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/*images*/}
          <Grid
            css={css(`
                background: #F1F6F9;
                height: 100vh;
                justify-content: center;
                display: flex;
                padding-top: 40px;
                flex-direction: column;
                padding-left: 120px;
                padding-right: 120px;
                padding-bottom: 50px;
                @media (max-width: 600px) {
                    padding-left: 30px;
                    padding-right: 30px;
                }
              `)}
            item
            container
            xs={6}
            direction={'column'}
          >
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={'/images/build-portfolio.svg'} height={230} />
              <Typography sx={{ marginLeft: 6, color: '#14274E' }}>
                Find and build projects alongside people with varying skillsets
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  marginRight: 6,
                  justifyContent: 'flex-start',
                  color: '#14274E',
                }}
              >
                Gain valuable experience working in a team which is a very
                important skill to have in the industry.
              </Typography>
              <img src={'/images/team-building.svg'} height={200} width={260} />
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={'/images/gain-rewards.svg'} height={230} />
              <Typography sx={{ marginLeft: 6, color: '#14274E' }}>
                Reach milestones that progresses your project forward and
                receive rewards!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
