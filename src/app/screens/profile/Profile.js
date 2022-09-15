import { useState, useEffect } from 'react';
import MFALogin from '../mfalogin/MFALogin';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { axiosInstanceAuth } from '../../services/Axios';
import Endpoints from '../../services/EndPoints';
import { green } from '@mui/material/colors';
import { EditProfile } from './EditProfile';

const axios = axiosInstanceAuth('');

const Profile = () => {
  const { profile, loading, error } = useUserProfile();
  const [webullConnected, setWebullConnected] = useState(false);

  useEffect(() => {
    setWebullConnected(
      profile != null && 
      Array.isArray(profile.webull) && 
      profile.webull.length > 0
    );
  }, [profile]);

  const loadingIndicator = <>
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </>

  if (error) {
    return <Alert sx={{ my: '20px' }} severity="error">
      { error }
    </Alert>
  }

  return <Container>
    <Grid sx={{ py: '20px' }} container spacing={2}>

      <Grid item xs={12} md={6} lg={7}>
        <Paper sx={{ width: '100%', padding: '20px' }}>
          { loading && loadingIndicator }
          {
            profile && !webullConnected && <MFALogin 
              embedded 
              onSuccess={() => setWebullConnected(true)} 
            />
          }
          {
            profile && webullConnected > 0 && <Box sx={{ 
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <img
                alt=""
                style={{ height: '20px', width: 'auto' }}
                src="https://wbstatic.webullfintech.com/v1/webull-us-g/assets/5df57d3f01093e5cc5f6a2ba2b50e8d3.svg"
              />
              <Typography variant="body1" component="span" sx={{ ml: 2, color: green[700] }} >Your webull account is connected</Typography>
            </Box>
          }
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={5}>
        <Paper sx={{ width: '100%', padding: '20px' }}>
          { loading && loadingIndicator }
          { profile && <EditProfile profile={profile} /> }
        </Paper>
      </Grid>

    </Grid>
  </Container>
}


export default Profile


const useUserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(Endpoints.LOGIN_ME);
        setProfile(data);
      } catch (e) {
        setError(e?.response?.data?.detail || e.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [])

  return { profile, loading, error }
}