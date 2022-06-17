import { getOrderItems } from '../../../api/itemData';
import renderToDom from '../../helpers/renderToDom';

const noItems = () => {
  const content = 'No items on order';
  renderToDom('#order-div', content);
};

const orderDetails = (orderId) => {
  let content = '';
  let total = 0;
  getOrderItems(orderId).then((itemsArr) => {
    if (itemsArr.length) {
      itemsArr.forEach((item) => {
        total += item.price;
        content += ` <div class="card">
      <div class="card-body">
        <h5 class="card-title">${item.item}</h5>
        <h6 class="card-subtitle mb-2">${item.price}</h6>
        <a id="editItem--${item.firebaseKey}" href="#" class="card-link">Edit Item</a>
        <a id="deleteItem--${item.firebaseKey}--${item.orderId}" href="#" class="card-link">Delete Item</a>
      </div>
    </div>`;
      });
      content += `<div class="orderDetailButtons">
    <button id="addItemBtn--${orderId}" type="button" class="btn btn-success">Add Item</button>
    <button id="paymentBtn--${orderId}" type="button" class="btn btn-primary">Go To Payment</button>
    </div>`;
      renderToDom('#main-header', `<h1>Total: $</h1>${total}`);
      renderToDom('#order-div', content);
    } else {
      noItems();
    }
  });
};

export default orderDetails;
