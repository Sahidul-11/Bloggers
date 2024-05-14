import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const UseContext = () => {
const a = useContext(AuthContext);
return a;

};

export default UseContext;