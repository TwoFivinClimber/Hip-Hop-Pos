import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No orders have been added</h1>';
  renderToDom('#order-div', domString);
};
const showOrders = (array) => {
  clearDom();
  const renderArray = array.filter((order) => order.status === 'open');
  if (renderArray.length) {
    let domString = '<div class="show-orders-div">';
    const searchBar = '<div id="search-div" class="search-div"><input id="orderSearch" class="search form-control me-2" type="search" placeholder="Order Search" aria-label="Search"</div>';
    renderToDom('#main-header', searchBar);
    renderArray.forEach((obj) => {
      domString += `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h3 class="order-name">${obj.name}</h3>
            <p class="order-email"><b>Customer Email:</b> ${obj.email}</p>
            <p class="order-number"><b>Customer Phone Number:</b> ${obj.phone}</p>
            <p class="order-type"><b>Order Type:</b> ${obj.type}</p>
            <i class="btn btn-success fas fa-eye" id="order-details--${obj.firebaseKey}"></i>
            <i class="fas fa-edit btn btn-info" id="edit-order--${obj.firebaseKey}"></i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-order-btn--${obj.firebaseKey}"></i>
          </div>
        </div>`;
    });
    domString += '</div>';
    renderToDom('#order-div', domString);
  } else {
    emptyOrders();
  }
};

export { showOrders, emptyOrders };
