import React from 'react';
import axios from 'axios';


class Jokes extends React.Component
{
    state = {
        jokes: [],
    }
    render()
    {
        return <ul>{this.state.jokes.map( jokes => <li key={user._id}>{Jokes.jokes}</li> )}</ul>;
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
            .get( 'http://localhost:5500/api/jokes', requestOptions )
            .then( response =>
            {
                this.setState( { Jokes: response.data } )
                console.log( response.data );



            } )
            .catch( err =>
            {
                console.error( err )

            } );
    }
}
export default Jokes;
