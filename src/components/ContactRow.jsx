const ContactRow = ({contact}) => {

  const clearTable = (e) => {
    e.preventDefault();
    const ret = document.querySelector('table')
    console.log(ret)
    ret.innerHTML = ''
    renderTable();
  }

  const renderTable = () => {
    const ret2 = document.querySelector('table')
    console.log(ret2)
    ret2.innerHTML = `
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
        <tr>
        <td>${contact.id}</td>
        <td>${contact.name}</td>
        <td>${contact.username}</td>
        <button onClick="window.location.reload()">Go Back</button>
      </tr>
  <table>
<thead>
`
  }

  return (
        <tr>
          <td>{contact.id}</td>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
          <button onClick={clearTable}>Deets</button>
        </tr>
      );
}

export default ContactRow