import {useState, useEffect} from 'react'
import ContactRow from './ContactRow'

const ContactList = () => {
const [contacts, setContacts] = useState([])

useEffect(() => {
const fetchContacts = async () => {
  try{
  const getContacts = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
  const response = await getContacts.json();
  setContacts(response)
} catch (error) {
  console.log(error)
}}

fetchContacts();
}, [])

return( 
<table>
  <thead>
      <tr>
         <th colSpan="4">Contact List</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Get Info</td>
      </tr>
      
  {contacts.map((contact) => {
  return <ContactRow key={contact.id} contact={contact}/>
  })}

    </tbody>
</table>
)};

export default ContactList