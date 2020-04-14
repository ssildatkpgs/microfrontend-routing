document.addEventListener('DOMContentLoaded', () => {
  const angularItemComponent = document.getElementById('angular-item');
  const angularListComponent = document.getElementById('angular-list');
  const reactCommentsComponent = document.getElementById('react-comments');
  const itemId = getItemId();

  angularItemComponent.setAttribute('itemid', itemId);
  angularListComponent.setAttribute('activeid', itemId);
  reactCommentsComponent.setAttribute('itemid', itemId);
  

  function getItemId() {
    const path = window.location.pathname;
    const urlParts = path.split('/');
    const id = urlParts[urlParts.length - 1];

    return id;
  }
});