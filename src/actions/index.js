import axios from 'axios';

export const FETCH_MEDIAID = 'FETCH_MEDIAID';

const RootURL= `https://api.instagram.com/oembed?url=`;

export function fetchMediaID(shortcode){

  const url = `${RootURL}${shortcode}`;

  const request = axios.get(url);

  console.log('Request is: ', request);

  return {
    type: FETCH_MEDIAID,
    payload: request
  };
}
