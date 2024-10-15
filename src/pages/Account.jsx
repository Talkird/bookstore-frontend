import React from 'react';

function Account() {
  const userData = {
    email: 'user@example.com',
    password: '********', 
    cellphone: '+85475491'
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Mi cuenta</h2>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Email:</label>
        <div className="p-3 border rounded bg-gray-100 text-gray-800">{userData.email}</div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Contraseña:</label>
        <div className="p-3 border rounded bg-gray-100 text-gray-800">{userData.password}</div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Telefono:</label>
        <div className="p-3 border rounded bg-gray-100 text-gray-800">{userData.cellphone}</div>
      </div>
    </div>
  );
}

export default Account;