// import axios from 'axios';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// rafce
// export const fetchFromAPI = () => {
//     const [data, setData] = useState([])
//     const {searchTerm} = useParams();
//     const src = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchTerm}&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`
//     axios
//       .get(src)
//         .then((data) => setData(data.data.items))
//   }