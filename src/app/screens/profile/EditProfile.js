import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { axiosInstanceAuth } from '../../services/Axios';
import EndPoints from '../../services/EndPoints';
import { toast } from "react-toastify";

const axios = axiosInstanceAuth();

export const EditProfile = ({ profile }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alias, setAlias] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFirstName(profile.first_name);
    setLastName(profile.last_name);
    setAlias(profile.alias);
  }, [profile]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    e.stopPropagation();

    let payload = {
      first_name: firstName,
      last_name: lastName,
      alias: alias,
    }

    setError(null);
    setSubmitting(true);
  
    try {
      await axios.patch(EndPoints.UPDATE_PROFILE, payload);
      toast.success("Updated Your Profile");
    } catch (e) {
      const message = e?.response?.data?.detail || e.toString();
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return <Box>
    <Typography variant="h5" sx={{ mb: 3 }}>Edit Profile</Typography>
    <form onSubmit={handleSubmit}>
      {
        error && <Alert sx={{ my: 1 }} variant='danger'>{ error }</Alert>
      }
      <Grid sx={{ mb: 2 }} container spacing={2}>
        <Grid item xs={6}>
          <TextField 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            fullWidth
            size="small" 
            label="First Name" 
            variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            fullWidth
            size="small" 
            label="Last Name" 
            variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            fullWidth
            size="small" 
            label="Alias" 
            variant="outlined" />
        </Grid>
      </Grid>
      <Button disabled={submitting} variant="contained" type="submit">
        Update
      </Button>
    </form>
  </Box>
}