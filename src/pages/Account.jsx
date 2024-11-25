import { useSelector } from "react-redux";

function Account() {
  const email = useSelector((state) => state.user.email);
  const role = useSelector((state) => state.user.role);

  return (
    <div className="mx-auto my-10 max-w-md rounded-lg bg-white p-8 shadow-lg border border-gray-200">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Mi Cuenta
      </h2>
      <div>
        <div className="flex items-center justify-between mb-6">
          <label className="w-1/3 font-medium text-lg text-gray-700">Email:</label>
          <div className="w-2/3 rounded-lg border bg-gray-50 p-4 text-gray-900 shadow-inner">
            {email}
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="w-1/3 font-medium text-lg text-gray-700">Rol:</label>
          <div className="w-2/3 rounded-lg border bg-gray-50 p-4 text-gray-900 shadow-inner">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
