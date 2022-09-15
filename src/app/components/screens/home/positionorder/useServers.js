import React, { useEffect, useState } from 'react';
import { axiosInstanceAuth } from '../../../../services/Axios';
import EndPoints from '../../../../services/EndPoints';
import { useAnalystDataUpdateEvent } from './useAnalystDataUpdateEvent';

const axios = axiosInstanceAuth('');

export const useServers = () => {
  const [loading, setLoading] = useState(false);
  const [servers, setServers] = useState(null);
  const { version } = useAnalystDataUpdateEvent();

  // fetch data fresh load
  useEffect(() => {
    const fetchServers = async () => {
      setLoading(true);
      try {
        let { data } = await axios.get(EndPoints.SERVERDATA);
        setServers(data.servers);
      } catch (e) {
        console.debug("error fetchng server data");
        console.debug(e);
      } finally {
        setLoading(false);
      }
    }
    fetchServers(); 
  }, []);

  // fetch servers in backgound
  useEffect(()=> {
    const fetchServersInBackground = async () => {
      console.debug("fetching server data in background");
      try {
        let { data } = await axios.get(EndPoints.SERVERDATA);
        setServers(data.servers);
        console.debug("fetched server data in background");
        console.debug(data.servers);
      } catch (e) {
        console.debug("error fetchng server data in background");
        console.debug(e);
      }
    }
    if (version !== 0) {
      fetchServersInBackground();
    }
  }, [version]);

  return { servers, loading }
}