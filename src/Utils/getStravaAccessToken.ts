import axios from "axios"

const getStravaAccessToken = async (code: string,uid:string) => {
    try	{
        const response = await axios.post(
            'http://localhost:3002/api/strava',
            {
                code: code,
                uid: uid,
            }
        )
       
        return response.data.access_token
      

    }catch(error){
        console.log(error)
    }
}

export default getStravaAccessToken