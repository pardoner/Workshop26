import {useEffect} from 'react';
import { useState } from 'react';

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    console.log(selectedContactId);
    useEffect(() => {
        async function fetchContact() { // switching to JS to fetch API
            try {
              console.log(selectedContactId);
              const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
              );
              const result = await response.json();
              setContact(result);
              console.log(result);
            } catch (error) {
              console.error(error);
            }
        }
        fetchContact();
  }, []);
    console.log(contact);
    if (contact) {
        return (
            <table>
                <tbody>
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.username}</td>
                    <td>{contact.website}</td>
                </tr>  
            </tbody>
            <button>Back To List</button>
            </table>
        );
    }
    
}

