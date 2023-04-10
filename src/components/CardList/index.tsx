import { Card } from 'components';
import React, { Component } from 'react';
import { IProduct } from 'types';
import css from './style.module.css';

interface CardListState {
  products: IProduct[];
}
class CardList extends Component<object, CardListState> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => this.setState({ products: json.products }));
  }
  render(): React.ReactNode {
    return (
      <div className={css.container}>
        {this.state.products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
