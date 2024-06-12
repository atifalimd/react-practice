import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 2, packed: true },
// ];

export default function App(){
  const [items,setItems] = useState([])

  function onAddItems(item){
    setItems(items=>[...items, item])
    // setItems(items) means new list
    // items means old list
  }

  function onDeleteItems(id){
    setItems((items)=>items.filter((item)=>(item.id !==id)))
    
    // setItems(items) means new list
    // items means old list
    // filter or map means looping each list item and will create a filtered list
  }
  return(
    <div>
      <Header/>
      <ListItems handleAddItems={onAddItems}/>
      <PackingList items={items} handleDeleteItems = {onDeleteItems}/>
      <Stats/>
    </div>
  )
}

function Header(){
  return(
    <h1 className="header">🏝️ FAR AWAY 💼</h1>
  )
}

function ListItems({handleAddItems}){
  const[description, setDescription] = useState('')
  const[quantity, setQuantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault()
    if(!description) return ;
    const newItem = {description, quantity, packed:false, id:crypto.randomUUID()}
    handleAddItems(newItem)
    setDescription('') 
    setQuantity(1)
  }
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😍 trip</h3>
      <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
        {Array.from({length:20},(_,i)=>i+1).map
        ((num)=>
        (<option value={num} key={num}>{num}</option>))}
      </select>
      <input placeholder="item.." type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button className="button">Add</button>
    </form>
  )
}

function PackingList({items, handleDeleteItems}){
  return(
    <div className="list">
      <ul>
      {items.map(eachItem=>(
        <Item eachItem={eachItem} handleDeleteItems={handleDeleteItems}/>
      ))}
      </ul>
    </div>
  )
}

function Item({eachItem, handleDeleteItems}){
  return(
    <div className="list">
      <li>
        <input type="checkbox"/>
        {eachItem.quantity} {eachItem.description} 
        <button onClick={()=>handleDeleteItems(eachItem.id)}>❌</button>
      </li>
    </div>
  )
}

function Stats(){
  return(
    <footer className="stats">
      <h3>💼 You have X items in your list</h3>
    </footer>
  )
}