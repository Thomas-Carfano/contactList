

const ContactRow = ({contact}) => {
  return (
        <tr>
          <td>{contact.id}</td>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
        </tr>
      );
}

export default ContactRow