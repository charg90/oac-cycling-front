import axios from 'axios'

const getActivities = async (id: string) => {
    try {
        const activities = await axios.post(
            'http://localhost:3002/api/strava/activities ',
            { uid: id }
        )
        return activities.data
    } catch (error) {
        console.log(error)
    }
}

export default getActivities
