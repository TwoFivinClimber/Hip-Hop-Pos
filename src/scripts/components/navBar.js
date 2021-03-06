import hhpwLogo from './image-gifs/hhpw-record.png';
import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg" style="background-color:#f9c74f;">
  <div class="container-fluid">
    <a class="navbar-brand" id="home">
      <img src=${hhpwLogo} alt="Hip Hop, Pizza and Wangs Logo" width="80" height="80">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" id="viewOrders" style="color: black;">View Orders</a>
        <a class="nav-link" id="createOrder" style="color: black;">Create an Order</a>
        <a class="nav-link" id="allClosedOrders" style="color: black;">Closed Orders</a>
      </div>
    </div>
  <div id="logout-btn"></div>
  </div>  
</nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
