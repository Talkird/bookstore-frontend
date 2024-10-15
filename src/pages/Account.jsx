import React, { useState } from 'react';
import Button from '../components/ui/Button';

function Account() {
  const [isAdmin, setIsAdmin] = useState(false);

  const userData = {
    email: 'user@example.com',
    password: '********', 
    cellphone: '+85475491'
  };

  const toggleView = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Mi cuenta</h2>
      <div className="space-y-6">
        <div className="flex items-center">
          <label className="w-1/3 text-gray-700 font-medium">Email:</label>
          <div className="w-2/3 p-3 border rounded bg-gray-100 text-gray-800">{userData.email}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-gray-700 font-medium">Contraseña:</label>
          <div className="w-2/3 p-3 border rounded bg-gray-100 text-gray-800">{userData.password}</div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 text-gray-700 font-medium">Telefono:</label>
          <div className="w-2/3 p-3 border rounded bg-gray-100 text-gray-800">{userData.cellphone}</div>
        </div>
      </div>
      {isAdmin && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded">
          <p>Admin View: Additional admin functionalities can be added here.</p>
        </div>
      )}
      <Button 
        onClick={toggleView} 
        className="mt-6"
        variant={isAdmin ? 'outline' : 'default'}
      >
        {isAdmin ? 'Switch to User View' : 'Switch to Admin View'}
      </Button>
    </div>
  );
}

export default Account;