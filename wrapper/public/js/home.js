document.addEventListener('DOMContentLoaded', () => {
  const angularButtonComponent = document.getElementById('angular-button');
  const reactButtonComponent = document.getElementById('react-button');
  const historyBox = document.getElementById('history-box');
  const message = document.getElementById('message');
  const messageButton = document.getElementById('message-button');

  messageButton.addEventListener('click', () => {
    const messageText = message.value;

    angularButtonComponent.setAttribute('message', messageText);
    reactButtonComponent.setAttribute('message', messageText);
    logAction('Native JS', `Wysłano wiadomość: < ${messageText} > do Angulara`);
    logAction('Native JS', `Wysłano wiadomość: < ${messageText} > do Reacta`);
  });

  angularButtonComponent.addEventListener('onAngularEvent', () => {
    logAction('Angular', 'Kliknięty button angularowy');
  });

  reactButtonComponent.addEventListener('onReactEvent', () => {
    logAction('React', 'Kliknięty button reactowy');
  });

  function logAction(source, logText) {
    historyBox.innerHTML += `<p class="history__log"><b>${source}:</b> ${logText}</p>`;
  }
});