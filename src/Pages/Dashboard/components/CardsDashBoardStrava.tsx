import { Box, Typography } from '@mui/material'
import React from 'react'
import { IActivity } from '../../../Interfaces/Interfaces'
import MapWorkout from './MapWorkout'
interface WorkoutComponentProps {
    workout: IActivity
}

const CardsDashBoardStrava = ({ workout }: WorkoutComponentProps) => {
    return (
        <Box
            key={workout.external_id}
            sx={{
                backgroundColor: 'primary.main',
                padding: 2,
                borderRadius: 2,
                width: '100%',
                maxWidth: '800px',
            }}
            display="flex"
            flexDirection="column"
        >
            <Box>
                <Typography variant="h2" textAlign="center">
                    {workout.name ? workout.name.slice(0, 55) + '...' : ''}
                </Typography>
            </Box>
            <MapWorkout polylines={workout.map?.summary_polyline} />
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={2}
                justifyContent="center"
                alignItems="center"
            >
                <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle1">
                        distance:
                        {workout.distance
                            ? (workout.distance * 0.001).toFixed(1)
                            : 0}
                        km
                    </Typography>
                    <Typography variant="subtitle1">
                        avg/speed
                        {workout.average_speed
                            ? (workout.average_speed * 3.6).toFixed(1)
                            : 0}
                        km/h
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">
                        {workout.elapsed_time
                            ? (workout.elapsed_time / 60).toFixed(1)
                            : 0}
                        min
                    </Typography>
                    <Typography variant="subtitle1">
                        avg/watts{workout.average_watts}watts
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">
                        elevation:{workout.total_elevation_gain}m
                    </Typography>
                    <Typography variant="subtitle1">
                        timezone: {workout.type}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1">
                        max speed:
                        {workout.max_speed
                            ? (workout.max_speed * 3.6).toFixed(1)
                            : 0}{' '}
                        km
                    </Typography>
                    <Typography variant="subtitle1">
                        {' '}
                        max watts:{workout.max_watts}watts
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CardsDashBoardStrava
