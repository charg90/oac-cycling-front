import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../../context/AppContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../../firebase/FirebaseConfig'
import { ICrendentials } from '../../../Interfaces/Interfaces'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, TextField, Button, Typography } from '@mui/material'
import loginBack from '../../../assets/loginBack.jpg'
import { getUserData } from '../../../firebase/getUserData'
import getStravaAccessToken from '../../../Utils/getStravaAccessToken'

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [stravaToken, setStravaToken] = useState('')
    const { setCredentials } = useContext(AppContext) as {
        setCredentials: React.Dispatch<React.SetStateAction<ICrendentials>>
    }
    const { id } = useParams()
    const code = new URLSearchParams(window.location.search).get('code')

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            const user = await getUserData(userCredential.user.uid)

            setCredentials({
                jwtToken: userCredential.user.accessToken, // jwt toke from crendentials
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
                accessToken: user?.accessToken || '',
                name: user?.name || '',
            })
            navigate(`/dashboard/${userCredential.user.uid}`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (code) {
            console.log(id, 'idddd')
            getStravaAccessToken(code, id as string)
        }
    }, [])

    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="center"
            height="100vh"
            alignItems={'center'}
            sx={{
                backgroundImage: `url(${loginBack})`,
                backgroundSize: 'cover',
            }}
        >
            <Box
                width="100%"
                maxWidth="770px"
                height="100%"
                maxHeight="474px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: '#f2f2f2',
                    borderRadius: '60px',
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSignIn}
                    display="flex"
                    flexDirection="column"
                    gap={4}
                    sx={{ width: '100%', padding: '0 2rem' }}
                >
                    <Box>
                        <Typography variant="h1" textAlign="center">
                            Sign In
                        </Typography>
                    </Box>
                    <TextField
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        sx={{ backgroundColor: '#f2f2f2' }}
                    />
                    <TextField
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <Button variant="contained" type="submit">
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginForm
