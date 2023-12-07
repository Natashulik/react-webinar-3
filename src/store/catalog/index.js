import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
      currentPage: 1,
      itemsPerPage: 10,
      count: 0,
      product: null,
    };
  }

  changePage(page) {
    const currentPage = this.getState().currentPage;
    console.log(currentPage);
    if (page < currentPage) {
      this.setState(
        {
          ...this.getState(),
          currentPage: currentPage - 1,
        },
        "Изменение № страницы"
      );
    } else if (page > currentPage) {
      this.setState(
        {
          ...this.getState(),
          currentPage: currentPage + 1,
        },
        "Изменение № страницы"
      );
      console.log(currentPage);
    }
    this.load();
  }

  async load() {
    const skip =
      (this.getState().currentPage - 1) * this.getState().itemsPerPage;
    // const response = await fetch(`/api/v1/articles?limit=${this.getState().itemsPerPage}&skip=${skip}`);
    const response = await fetch(
      `/api/v1/articles?limit=${
        this.getState().itemsPerPage
      }&skip=${skip}&fields=items(_id, title, price),count`
    );
    const json = await response.json();
    console.log("товары с апи: " + JSON.stringify(json));
    console.log("Количество: " + json.result.count);
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        count: json.result.count,
      },
      "Загружены товары из АПИ"
    );
  }

  chooseProduct(_id) {
    console.log(_id);
    this.loadProduct(_id);
  }

  async loadProduct(_id) {
    const response = await fetch(`/api/v1/articles/${_id}`);

    const json = await response.json();
    console.log("ТОВАР: " + JSON.stringify(json));
    this.setState(
      {
        ...this.getState(),
        product: json.result,
      },
      "Товар из АПИ"
    );
  }
}

export default Catalog;
