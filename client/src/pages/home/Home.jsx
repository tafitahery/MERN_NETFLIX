import { useState, useEffect } from 'react';
import axios from 'axios';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const { data } = await axios.get(
          `/lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzVhMTM5YzJjNTc3ZGViMGUzNzBiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDU0NDY2OCwiZXhwIjoxNjY0OTc2NjY4fQ.MBrYYkXhjANTkIh-TvkYdcjBw7dGEoaCPu99sA4k_jE',
            },
          }
        );
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
}
