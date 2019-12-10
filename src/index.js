import copyTitle from './util/copyTitle';

window.onload = function() {
  const buttonClass = 'copy-issue-title-to-clipboard';
  const buttonString = `
    <button 
      style="
        line-height:1em;
        float: right;
      "
      class="aui-button ${buttonClass}"
    >
      <span
        class="aui-icon aui-icon-small aui-iconfont-copy-clipboard"
      ></span>
    </button>`;

  const header = document.querySelector('#stalker .aui-page-header-main');
  header.insertAdjacentHTML('beforeend', buttonString);

  const button = document.querySelector(`.${buttonClass}`);
  button.addEventListener('click', () => {
    copyTitle();
  });
};
