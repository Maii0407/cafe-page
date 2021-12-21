
const Menu = (function(){
    const mainContent = document.querySelector('.main-content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    mainContent.appendChild(menuContainer);

//below is array and class that makes the menu items
    const _mySweets = [];

    class _Sweets {
        constructor(name,description){
            this.name = name;
            this.description = description;
        }
    };

    return{};
})();

export {Menu};