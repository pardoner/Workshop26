import './App.css'
import  ContactList  from './components/ContactList' // importing contacts list then placing it within our app below
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null); // first thing under <> is the parent fragment element
  return (
    <>
    {selectedContactId ? (
      <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}  />
    )} 
    </>
  );
}


export default App


// selectedContactId ? is a tenary statement that evaluates the selectedContactId. If it is a truthy value, for now, render a div with a short message. If selectedContactId is falsey, render the ContactList component.