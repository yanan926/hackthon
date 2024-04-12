import axios from 'axios';
import { useState, useEffect } from 'react';
import './Celebrity.scss'
const Celebrity = ({gotName, userUrl}) => {
  const hasPic = true;
  // const gotName = 'Angelina Jolie';
  const [celebrity,setCelebrity]=useState('');
  const [celeId,setCeleId]=useState(0);
  async function searchPerson(name) {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/person',
        {
          params: {
            query: name,
            include_adult: false,
            language: 'en-US',
            page: 1,
          },
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZkMmE5OTUyYTA3MGRkYjI2YTI5NjE1N2NhYzYyMiIsInN1YiI6IjY1NjdhOGYwM2Q3NDU0MDEyY2NkN2M4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2nDUFlswsriDzjUB_gjlerw9r8mjsmo5lyHs78OsXA',
          },
        }
      );
      // console.log(response);
      let celebrityData=response.data.results[0];
      let fondId=celebrityData.id;
     setCelebrity(celebrityData);
     setCeleId(fondId);
    } catch (error) {
      console.error('error:', error);
    }
  };
  useEffect(() => {
    searchPerson(gotName);
  }, []);
  useEffect(() => {
    console.log(celebrity);
    console.log(celeId);
  }, [celebrity]);
    return (
      <>
      {
        hasPic?(
        <div className='result-container'>
        <div className='cele-img'>
          <img src={userUrl} alt="" />
        <img
          src={`https://www.themoviedb.org/t/p/original${celebrity.profile_path}`}
          alt={gotName}
        />
      </div>
        <h3>about {celebrity.name}</h3>
        <ul>
        <li>gender: {celebrity.gender === 2 ? 'Male' : celebrity.gender === 1 ? 'Female' : 'Unknown'}</li>
          <li>known as:{celebrity.known_for_department}</li>
          <li>popularity:{celebrity.popularity}</li>
        </ul>
      </div>
        ):(
          <div>
        <h2>You're very unique, you don't look like any celebrity, and being yourself is the best thing to do</h2>
      </div>
        )
      }
      </>
    )
}
export default Celebrity;