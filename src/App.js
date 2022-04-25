import React, {useState, useEffect} from "react";
import SortHeader from "./components/SortHeader";
import UserList from "./components/UserList";
import UserService from "./API/UserService";
import { useFetching } from "./components/hooks/useFetching";
import Loader from "./components/utils/Loader/Loader";
import UserListHeader from "./components/UI/UserHeader/UserHeader";
import Button from "./components/UI/button/Button";


function App() {
  const [lists, setLists] = useState([])
  const [limit, setLimit] = useState(10)
  const [sort, setSort] = useState(false)
  const [method, setMethod] = useState('')
  
  const [fetchList, isListLoading, listError] = useFetching ( async () => {
    const response = await UserService.getAll(10)
    setLists(response.data)
    
  })
  useEffect( () => {
    setTimeout(() =>{
      fetchList()

    }, 1000)
  }, []);

  

  return (
      <div className="app" >
        <div className="menu">
        <SortHeader />
        <Button 
        onClick={() => {
          setSort(true);
          setMethod('city')}} 
        name={'по городу'}  />
        <Button 
        onClick={() => {
          setSort(true);
          setMethod('company')}} 
        name={'по компании'}  />
        </div>
        {!lists.length 
        ? <Loader />
        : <div className="user__list" >
            <UserListHeader name='Список пользователей' />
            <UserList lists={lists} sort={sort} method={method}/> 
          </div>
        }
      </div>
  );
}

export default App;
