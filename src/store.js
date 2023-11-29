

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }


  /**
   * Удаление записи по коду
   * @param code
   */
    deleteItem(code) {
      this.setState({
        ...this.state,
        basket: this.state.basket.filter(item => item.code !== code)
      })
    };

  /**
   * Добавление товара в корзину
   */
 
    addItem(item) {
      const { basket } = this.state;
      const existItem = basket.find((basketItem) => basketItem.code === item.code);
    
      if (existItem) {
        const updatedBasket = basket.map((basketItem) =>
          basketItem.code === item.code ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
        );
    
        this.setState({
          ...this.state,
          basket: updatedBasket,
        });
      } else {
        this.setState({
          ...this.state,
          basket: [...basket, { ...item, quantity: 1 }],
        });
      }
    }
    
}

export default Store;
