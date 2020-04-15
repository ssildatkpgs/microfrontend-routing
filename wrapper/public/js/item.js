document.addEventListener('DOMContentLoaded', () => {
  const angularItemComponent = document.getElementById('angular-item');
  const angularListComponent = document.getElementById('angular-list');
  const reactCommentsComponent = document.getElementById('react-comments');
  const reactHitsComponent = document.getElementById('react-hits');
  const itemId = getItemId();
  const hits = getHits();

  angularItemComponent.addEventListener('onHitsRefreshEvent', () => {
    const hitsRefreshed = getHits();

    reactHitsComponent.setAttribute('hits', hitsRefreshed);
  });

  angularItemComponent.setAttribute('itemid', itemId);
  angularListComponent.setAttribute('activeid', itemId);
  reactCommentsComponent.setAttribute('itemid', itemId);

  function getHits() {
    return localStorage.getItem(`hits-item-${itemId}`) || 1;
  }

  function getItemId() {
    const path = window.location.pathname;
    const urlParts = path.split('/');
    const id = urlParts[urlParts.length - 1];

    return id;
  }
});