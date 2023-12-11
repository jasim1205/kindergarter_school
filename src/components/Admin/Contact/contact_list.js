import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Layout/footer';
import Sidebar from '../Layout/sidebar';
import { useNavigate } from 'react-router-dom';
function Contact_list ()
{
    const [ user, setUser ] = useState( [] );
    const [ inputs, setInputs ] = useState( [] );
    useEffect( () =>
    {
        getDatas();
    }, [] );
    function getDatas()
    {
        axios.get( "http://localhost/react_api/Contact/user_list.php" ).then( function ( response )
        {
            setUser( response.data.data );
        } );
    }
    const deleteContact = ( id ) =>
    {
        axios.delete( `http://localhost/react_api/contact_delete.php?id=${ id }` ).then( function ( response )
        {
            getDatas();
        } );
    };
  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <h1 className="text-center">
              <small>User Message List</small>
            </h1>
            <table className="table table-hover table-bordered">
              <thead className='bg-dark text-white'>
                <tr>
                  <th>#</th>

                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((d, key) => (
                  <tr key={key}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.subject}</td>
                    <td>{d.message}</td>
                    <td>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-danger btn-xs"
                        onClick={() => deleteContact(d.id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_list
