import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

import getActivities from '../../Utils/getActivities'
import { IActivity } from '../../Interfaces/Interfaces'
import { Box, Typography } from '@mui/material'
import CardsDashBoardStrava from './components/CardsDashBoardStrava'

export default function Dashboard() {
    const { credentials } = useContext(AppContext)
    const { accessToken } = credentials
    const [workouts, setWorkouts] = useState([] as IActivity[])
    const { id } = useParams()
    console.log(workouts)

    useEffect(() => {
        async function fetchActivities() {
            const activities = await getActivities(id as string)
            console.log(activities.activities)
            setWorkouts(activities.activities || [])
        }
        if (accessToken) {
            fetchActivities()
        }
    }, [])
    return (
        <div>
            <h1>dashboard</h1>

            {!accessToken && (
                <Link
                    to={`https://www.strava.com/oauth/authorize?client_id=107898&redirect_uri=http://localhost:5173/login/${id}&response_type=code&scope=activity:read_all`}
                >
                    Strava
                </Link>
            )}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
            >
                {workouts.length > 0 ? (
                    workouts.map((workout: IActivity) => (
                        <CardsDashBoardStrava
                            key={workout.external_id}
                            workout={workout}
                        />
                    ))
                ) : (
                    <div>no workouts</div>
                )}
            </Box>
        </div>
    )
}
