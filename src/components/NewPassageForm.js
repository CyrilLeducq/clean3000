import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvis } from '../slices/avisSlice'; // Assuming you have an avisSlice
import './styles/NewPassageForm.scss';

function NewPassageForm() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.data.clients); // Assuming your client state is stored in Redux
console.log(clients);
  const [avisData, setAvisData] = useState({
    clientId: '',
    passageDate: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvisData({ ...avisData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!avisData.clientId || !avisData.passageDate) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    dispatch(addAvis(avisData));

    setAvisData({
      clientId: '',
      passageDate: '',
    });

    setConfirmationMessage("L'avis de passage a été ajouté avec succès !");
  };

  return (
    <div className="passage-container">
      <h1>Formulaire nouvel avis de passage</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Client :</label>
          <select name="clientId" value={avisData.clientId} onChange={handleChange}>
            <option value="">Sélectionnez un client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date de passage :</label>
          <input type="date" name="passageDate" value={avisData.passageDate} onChange={handleChange} />
        </div>
        <button type="submit">Enregistrer l'avis de passage</button>
      </form>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
}

export default NewPassageForm;
