import { useState, useCallback, useReducer} from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';
import {reducer} from "../lib/reducer";

const Application = () => {
  const [items, setItems] = useState(() => getInitialItems());
  // const [items, dispatch] = useReducer(reducer, getInitialItems());

  // const add = useCallback((name) => {
  //   const item = createItem(name);
  //   setItems([...items, item]);
  // }, [items]);
  //
  // const update = useCallback((id, updates) => {
  //   setItems(updateItem(items, id, updates));
  // }, [items]);
  //
  // const remove = useCallback((id) => {
  //   setItems(removeItem(items, id));
  // }, [items]);

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  // const markAllAsUnpacked = useCallback(() => {
  //   return setItems(items.map((item) => ({ ...item, packed: false })));
  // }, [items]);

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header items={items} />
      <NewItem
          // dispatch={dispatch}
        // addItem={add}
          setItems={setItems}
      />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          // dispatch={dispatch}
          // update={update}
          // remove={remove}
          setItems={setItems}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          // dispatch={dispatch}
          // update={update}
          // remove={remove}
          setItems={setItems}
        />
      </section>
      <MarkAllAsUnpacked
          // onClick={markAllAsUnpacked}
          // dispatch={dispatch}
          setItems={setItems}
      />
    </main>
  );
};

export default Application;
