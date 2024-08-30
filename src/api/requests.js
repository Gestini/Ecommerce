import { authApi, api, apiNode } from './axios';
/* Rutas usuarios */
export const reqSearchUserByUsername = (username) => api.get(`/user/search-by-username/${username}`);
export const reqLoadUsersByIds = (data) => api.post("/user/get-by-ids", data);
export const reqLoadUserSessions = (data) => api.post("/user/get-user-sessions", data);
/* Rutas para manejar el auth */
export const reqAuthLogin = async (data) => authApi.post('/auth/login', data);
export const reqAuthRegister = async (data) => authApi.post('/auth/register', data);
export const reqAuthLoadProfileByToken = async (token) => authApi.get('/auth/load-user-by-token/' + token);
export const reqAuthSendToken = async (data) => authApi.post('/auth/request-password-reset', data);
export const reqAuthChangePassword = async (data) => authApi.post('/auth/reset-password', data);
/* Rutas unidades */
export const reqCreateUnit = async (data) => api.post('/business-unit/save', data);
export const reqGetUnitById = async (id) => api.get('/business-unit/get/' + id);
export const reqGetUnitByOwner = async () => api.get('/business-unit/get-by-owner');
export const reqDeleteUnitById = async (id) => api.delete(`/business-unit/delete/${id}`);
/* Rutas productos */
export const reqCreateProduct = async (data) => api.post('/products', data);
export const reqEditProduct = async (id, data) => api.put(`/products/${id}`, data);
export const reqDeleteProduct = async (id) => api.delete(`/products/${id}`);
export const reqGetProductByDeposit = async (id) => api.get(`/products/depositunit/${id}`);
export const reqGetProductByUnit = async (id) => api.get(`/products/by-business-unit/${id}`);
export const reqSearchProduct = async (name) => api.get(`/products/by-name/${name}`);
export const reqSearchProductByNameAndUnit = async (name, id) => api.get(`/products/search/${name}/${id}`);
/* Rutas proveedores */
export const reqCreateSupplier = async (data) => api.post('/suppliers', data);
export const reqGetSupplier = async (id) => api.get(`/suppliers/by-business-unit/${id}`);
export const reqEditSupplier = async (id, data) => api.put(`/suppliers/${id}`, data);
/* Rutas facturacion */
export const reqGetInvoiceId = async (id) => api.get(`/invoicing/get/${id}`);
export const reqCreateInvoice = async (data) => api.post('/invoicing/save', data);
export const reqDeleteInvoice = async (id) => api.delete(`/invoicing/delete/${id}`);
export const reqUpdateInvoice = async (id, data) => api.put(`/invoicing/${id}`, data);
export const reqGetAllInvoicesByUnit = async (id) => api.get(`/invoicing/get-by-unit/${id}`);
/* Rutas depositos */
export const reqCreateDeposit = async (data) => api.post('/deposit/save', data);
export const reqEditDeposit = async (id, data) => api.put(`/deposit/${id}`, data);
export const reqDeleteDeposit = async (id) => api.delete(`/deposit/${id}`);
export const reqGetDepositByUnit = async (id) => api.get(`/deposit/${id}`);
/* Rutas clientes */
export const reqCreateClient = async (data) => api.post('/clients', data);
export const reqEditClient = async (id, data) => api.put(`/clients/${id}`, data);
export const reqDeleteClient = async (id) => api.delete(`/clients/${id}`);
export const reqGetClientByUnit = async (id) => api.get(`/clients/by-business-unit/${id}`);
/* Rutas roles */
export const reqCreateRole = async (data) => api.post('/role', data);
export const reqEditRole = async (id, data) => api.put(`/role/${id}`, data);
export const reqDeleteRole = async (id) => api.delete(`/role/${id}`);
export const reqGetRoletByUnit = async (id) => api.get(`/role/get-by-unit/${id}`);
export const reqAddPermissionRole = async (data) => api.post('/role/add-perms', data);
export const reqRemovePermissionRole = async (roleId, permissionId) => api.post(`/role/remove-perms/${roleId}/${permissionId}`);
export const reqAddRoleUser = async (data) => api.post('/role/add-user', data);
export const reqRemoveRoleUser = async (roleId, userId) => api.delete(`/role/remove-user/${roleId}/${userId}`);
export const reqUserHasPermissions = ({ unitId, permissionName }) => api.get(`/role/has-permissions/${unitId}/${permissionName}`);
/* Rutas empleados */
export const reqCreateEmployee = async (data) => api.post('/employee', data);
export const reqGetEmployeesByUnit = async (id) => api.get(`/employee/get-by-unit/${id}`);
export const reqSearchEmployeeByName = (unitId, name) => api.get(`/employee/get-by-name/${unitId}/${name}`);
export const reqLoadEmployeeByRole = (id) => api.get(`/role/get-employees/${id}`);
export const reqDeleteEmployee = (id) => api.delete(`/employee/delete/${id}`);
export const reqEditEmployee = (id, data) => api.put(`/employee/edit/${id}`, data);
export const reqLeaveUnit = (id) => api.delete(`/employee/leave-unit/${id}`);
// RUTAS CON BACKEND NODE
/* Rutas AFIP */
export const reqCreateInvoiceAfip = async (data) => apiNode.post('/create-invoice', data);
export const reqCreateCreditInvoiceAfip = async (data) => apiNode.post('/create-credit-invoice', data);
export const reqCreateCreditNoteAfip = async (data) => apiNode.post('/create-credit-note', data);
