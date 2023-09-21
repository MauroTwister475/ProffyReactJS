
/*

import { useState, useMemo, useCallback } from "react";
import { Item } from "./components/Item";

export function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [wishList, setWishList] = useState<string[]>([]);
  
  function handleAddItem() {
    setItems([...items, `item ${items.length}`])
  }

  const addToWishList = useCallback((item: string) => { //copia da função
    setWishList(state => [...state, item]);
    // pegar o state anterior e não é necessario colocar as dependencias
  }, []);// acessar sempre o estado anterior da dependencia e modifica-lo

  const itemWithOne = useMemo(() => {// calculos complexos
    console.log(wishList);
    return items.filter(item => item.includes('1')).length
  }, [items]);

  return (
    <>
      <input 
        type="text" 
        onChange={(e) => setNewItem(e.target.value)} 
        value={newItem} 
      />
      <button
        onClick={handleAddItem}
      >
        add
      </button>
      <ul>
        {items.map((item, index) => {
          return (
            <Item 
              key={index} 
              title={item} 
              onAddToWishList={addToWishList} 
            />)
        })}
      </ul>
      <div>
        Contagem: {itemWithOne}
      </div>
    </>
  );
}


*/