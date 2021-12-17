import Icon from './header.png';

function createHeader(){
    const content = document.getElementById('content');
    const headerIcon = new Image();
    headerIcon.src = Icon;
    headerIcon.classList.add('headerIcon');

    content.appendChild(headerIcon);

    return headerIcon;
}

export {createHeader};