
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const [items , setItems] = useState( JSON.parse(localStorage.getItem('shopinglist')) );

const [newItem , setNewItem] = useState('')
const [search , setSearch] = useState('')


const addItem = (item)=>{
const id = items.length ? items[items.length - 1].id + 1 : 1;
const myNewItem = { id ,checked:false ,  tittle: item  };
const listItem = [...items , myNewItem];
setItems(listItem);
localStorage.setItem('shopinglist' , JSON.stringify(listItem));

}


const handleCheck = (id) =>{
  console.log(id);
  const listItem = items.map((item)=> item.id === id ? {...item , checked: !item.checked} : item );
  setItems(listItem);
  localStorage.setItem('shopinglist' , JSON.stringify(listItem));
}

const handleDelete = (id) =>{
   const listItem = items.filter((item) => item.id !== id ) ;
   setItems(listItem)
   localStorage.setItem('shopinglist' , JSON.stringify(listItem));
}

const handleSubmit =(e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}




  return (
    <div className="App">
     
      <Header  title ="Groceries lists" />
    
      <AddItem
       newItem = {newItem}
       setNewItem = {setNewItem}
       handleSubmit={handleSubmit}
      
      />

      <SearchItem
      search = {search}
      setSearch = {setSearch}
      
      />

      <Content
      items={items.filter(item =>  item.tittle.toLowerCase().includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}

      />
      <Footer
       
       length = {items.filter(item=> item.tittle.toLowerCase().includes(search.toLowerCase()))}
       totalItems = {items.length}

      />
      
     
    </div>
  );
}

export default App;
