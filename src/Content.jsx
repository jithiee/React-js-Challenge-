
import ItemsList from "./ItemsList";
const Content = ({items, handleCheck , handleDelete}) => {

  return (



 <div>

  {items.length  ? ( 
   <ItemsList
    items = {items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
   />
)  : (

    <h1>your list is empyt</h1>
)}







 </div>



  );
}

export default Content;




// const [name , setName] = useState('rob')
// const [count , setCount] = useState(0)
 

// const handleNameChange = ()=>{
//     const names = ['jithn' , 'niyas' , 'raju' ]
//     const int = Math.floor(Math.random() * 3)
//     // return names[int]
//     setName(names[int])
// }

// const handleCount = ()=>{
//    setCount(count + 1)
//    console.log(count);
   
// }


// const hendleClick1 = () =>{
//     console.log('you are clicked')
// }
// const hendleClick2 = (name) =>{
//     console.log(`${name} clicked` )
// }
// const hendleClick3 = (e) =>{
//     console.log(e)
// }
// const hendleClick4 = (name) =>{
//     console.log(`${name} clicked`)
// }
// const hendleClick5 = (e)=>{
//  console.log(e.target.name);
//  console.log(e.target.value);
//  console.log(e.target.innerText);
 
// }








      {/* <p>Hello {name} </p>

     <button onClick={handleNameChange} >change name</button>
     <button onClick={handleCount} > count </button>

      <button onClick={hendleClick1} > click me 1   </button>
      <button onClick={()=> hendleClick2('dave')}  > click me 2    </button>
      <button name='newvalues' value='newvalues' onClick={(e) =>hendleClick3(e)}  > click me 3   </button>
      {/* <button onClick={() =>hendleClick4(handleNameChange())}  > click me 4   </button> */}
      {/* <button  name='newbtn' value='newvalues'  onClick={(e) =>hendleClick5(e)}  > click me 5   </button> */}
  