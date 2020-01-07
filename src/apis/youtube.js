import axios from 'axios';

const KEY = 'AIzaSyB3xIbVQs2b0ItopgYs5I8JiFdV4OrIpkg';

export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',
  params : {
    part : 'snippet',
    type : 'video',
    maxResults : 10,
    key : `${KEY}`
  }
});