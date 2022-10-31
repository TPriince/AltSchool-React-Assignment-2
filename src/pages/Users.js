import React from 'react';
import {Outlet} from 'react-router-dom';
import {useState} from 'react';
import useFetch from '../hooks/useFetch';


function UsersList() {
  const [page, setPage] = useState(1);
  
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?results=1000&seed=abc`
  );

  const PER_PAGE = 10;
  
  const total = data?.results?.length;
  
  const pages = Math.ceil(total / PER_PAGE);
  
  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="App">
      <h3 className="title">List of Users</h3>

      {data?.results
        .slice(skip, skip + PER_PAGE)
        .map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
              index + 1
            }. ${name}`}</li>
          );
        })}
      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      }
      
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
    </div>
  );
}


export default function Users() {
  return (
    <>
      <h2>This is the users page</h2>

      <UsersList />

      <Outlet />
    </>
  )
}