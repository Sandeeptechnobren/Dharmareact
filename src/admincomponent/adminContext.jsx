import React, { createContext, useState } from "react";

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminName, setAdminName] = useState(null);

  return (
    <AdminContext.Provider value={{ adminName, setAdminName }}>
      {children}
    </AdminContext.Provider>
  );
}
 export default AdminContext;