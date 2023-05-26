import { useContext, useEffect, useState } from 'react'
import { IActivity } from '../Interfaces/Interfaces'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

function useStravaActivities(
    uid: string,
    code: string
): [IActivity[], boolean] {
    const { credentials } = useContext(AppContext) as { credentials: any }
    const [activities, setActivities] = useState<IActivity[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    let accessToken = ''
    const token = code

    const sentStravaCode = async () => {
        try {
            if (credentials.accessToken === '') {
                const response = await axios.post(
                    'http://localhost:3002/api/strava',
                    {
                        code: token,
                        uid: uid,
                    }
                )
                console.log(response.data.authorization.access_token)
                accessToken = response.data.authorization.access_token
            } else {
                console.log('con access token')
                const response = await axios.post(
                    'http://localhost:3002/api/strava',
                    {
                        code: code,
                        uid: uid,
                    }
                )
                console.log(response.data.authorization.access_token)
                accessToken = response.data.authorization.access_token
            }

            if (accessToken) {
                console.log('entre')
                const activites = await axios.get(
                    'https://www.strava.com/api/v3/athlete/activities',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                setActivities(activites.data)
                setLoading(false)
                console.log(activites.data)
            } else {
                console.log('no hay accestoekn')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        sentStravaCode()
    }, [uid, token])
    return [activities, loading]
}

export default useStravaActivities
