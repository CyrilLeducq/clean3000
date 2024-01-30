import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClient } from '../slices/clientSlice';
import './styles/NewClientForm.scss';

function NewClientForm() {
  const dispatch = useDispatch();

  const [clientData, setClientData] = useState({
    name: '',
    address: '',
    email: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientData.name || !clientData.address || !clientData.email) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    dispatch(addClient(clientData));

    setClientData({
      name: '',
      address: '',
      email: ''
    });

    setConfirmationMessage('Le client a été ajouté avec succès !');


  };

  return (
    <div className="home-container">
      <img className="logoImage"
                src={require(`../images/logo-clean3000-transparent.png`)}
              />
              
      <form onSubmit={handleSubmit}>
        <h1>Formulaire nouveau client</h1>
        <div>
          <label>Nom :</label>
          <input type="text" name="name" value={clientData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Adresse :</label>
          <input type="text" name="address" value={clientData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" value={clientData.email} onChange={handleChange} />
        </div>
        <button type="submit">Ajouter Client</button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}

export default NewClientForm;
