import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];

export default function App(){
  return(
    <div>
      <Header/>
      <ListItems/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

function Header(){
  return(
    <h1 className="header">🏝️ FAR AWAY 💼</h1>
  )
}

function ListItems(){
  const[description, setDescription] = useState('')
  const[quantity, setQuantity] = useState(1)

  function handleSubmit(e){
    e.preventDefault()

    if(!description) return ;

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

function PackingList(){
  return(
    <div className="list">
      <ul>
      {initialItems.map(eachItem=>(
        <Item eachItem={eachItem}/>
      ))}
      </ul>
    </div>
  )
}

function Item({eachItem}){
  return(
    <div className="list">
      <li>
        <input type="checkbox"/>
        {eachItem.quantity} {eachItem.description} ❌
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