(function () {
  const options = document.currentScript.dataset;
  const node = document.createElement('div');
  node.innerHTML = `<a href="">${options.label || 'click me'}</a>`;

  document.currentScript.parentNode.replaceChild(
    node,
    document.currentScript
  )
})();