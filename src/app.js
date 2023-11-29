import React, { useCallback } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from "./components/basket";
import { useState } from "react";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const list = store.getState().list;
  const basket = store.getState().basket;

  const callbacks = {
    onAddItem: useCallback((item) => {
      store.addItem(item);
     }, [store]),
    onDeleteItem: useCallback((item) => {
      store.deleteItem(item);
     }, [store]),
     };


  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls  basket={basket} setIsBasketOpen={setIsBasketOpen} /> 
      <List list={list} onAddItem={callbacks.onAddItem} />
      {isBasketOpen && <div className="overlay"> <Basket basket={basket} setIsBasketOpen={setIsBasketOpen}  onDeleteItem={callbacks.onDeleteItem}/> </div>}
    </PageLayout>
  );
}

export default App;
