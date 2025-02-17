export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.className = 'connection_error';
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 6000);
};

export const showDownloadAlert = () =>{
  showAlert('Image wasn\'t downloaded from the server');
};
