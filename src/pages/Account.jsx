import { getEmail,getRole } from "../utils/token";

function Account() {

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
        Mi cuenta
      </h2>
      <div className="space-y-6">
        <div className="flex items-center">
          <label className="w-1/3 font-medium text-gray-700">Email:</label>
          <div className="w-2/3 rounded border bg-gray-100 p-3 text-gray-800">
            {getEmail()}
          </div>
        </div>
        <div className="flex items-center">
          <label className="w-1/3 font-medium text-gray-700">Rol:</label>
          <div className="w-2/3 rounded border bg-gray-100 p-3 text-gray-800">
            {getRole()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
