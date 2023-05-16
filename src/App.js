import {useState} from 'react';
import UsersList from './components/UsersList';
import './App.css';
import AdminPage from './components/AdminPage';

function App() {
  const [usersList,setUsersList]= useState([]);
  const adduserHandler = (uProductId, uSellingPrice, uCategory) =>{
    setUsersList((prevUserList)=>{
      return[...prevUserList,{productId:uProductId, sellingPrice: uSellingPrice, category:uCategory, id:Math.random().toString()},];
    })
    };

  return (
<div>
  <AdminPage onAddUser={adduserHandler}/>
  <UsersList users={usersList}/>
</div>
  );
}

export default App;
