
import Login from './Auth/Login';
import Register from './Auth/Register';
import { Routes, Route } from 'react-router-dom';
export default function Auth(){
return (
<>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
</>


)
}