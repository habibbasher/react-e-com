import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount, selectCartHidden } from '../../redux/cart/cart.selectors';


const CartIcon = ({ hidden, toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={() => toggleCartHidden(!hidden)}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (hidden) => dispatch(toggleCartHidden(hidden))
});

const mapStateToProps = (state) => ({
  hidden: selectCartHidden(state), // This can be done in another way(use that way in future project or other places) see in Header.js
  itemCount: selectCartItemsCount(state) // This can be done in another way see in Header.js
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);