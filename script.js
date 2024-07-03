document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('#categories .category');
    const menuSection = document.getElementById('menu');
    const cartSection = document.getElementById('cart');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            document.getElementById('categories').style.display = 'none';
            menuSection.style.display = 'block';
        });
    });

    const addToCartButtons = menuSection.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuSection.style.display = 'none';
            cartSection.style.display = 'block';
        });
    });
});
