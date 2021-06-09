const dropdowmTextArea = document.querySelector('.left-block__droptext');
const dropdowmText = dropdowmTextArea.querySelector('.left-block__droptext-text')
const dropdownMenu = document.querySelector('.left-block__droptext-block');
const arrowDown = dropdowmTextArea.querySelector('img');

const listItems = dropdowmTextArea.querySelectorAll('.left-block__droptext-block li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
         dropdowmText.textContent = item.textContent;
    })
})    

dropdowmTextArea.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none' || !dropdownMenu.style.display) {
        dropdownMenu.style.display = 'block';
        arrowDown.style.transform = 'rotate(0deg)';

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                 dropdowmText.textContent = item.textContent;
            })
        })    
    } else {
        dropdownMenu.style.display = 'none';
        arrowDown.style.transform = 'rotate(180deg)';

        listItems.forEach(item => {
            item.removeEventListener('click', () => {
                 dropdowmText.textContent = item.textContent;
            })
        })    
    }
})