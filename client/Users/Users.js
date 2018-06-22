import React from 'react';
import axios from 'axios';


class Users extends React.Component
{
    state = {
        users: [],
    }
    render()
    {
        return <ul>{this.state.users.map( user => <li key={user._id}>{user.username}</li> )}</ul>;
    }
    componentDidMount()
    {
        const token = localStorage.getItem( 'jwt' );

        const requestOptions = {
            headers: {
                Authorization: token
            }


        }
        axios
            .get( 'http://localhost:5500/api/users', requestOptions )
            .then( response =>
            {
                this.setState( { users: response.data } )
                console.log( response.data );



            } )
            .catch( err =>
            {
                console.error( err )

            } );
    }
}
export default Users;
