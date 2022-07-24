const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('redText');
content.textContent = 'This is some red text.';
content.style.color = 'red';

const header = document.createElement('h3');
header.classList.add('headerThree');
header.textContent = 'This is some blue text.';
header.style.color = 'blue';

container.appendChild(content);
container.appendChild(header)

const mainBody = document.createElement('div');
mainBody.classList.add('mainBody');
mainBody.style.cssText = 'background: pink; border: solid black;';

const mainHeader = document.createElement('h1');
mainHeader.classList.add("mainHeader");
mainHeader.textContent = 'I\'m a main header.';

const paragraph = document.createElement('p');
paragraph.classList.add('mainParagraph')
paragraph.textContent = 'I\'m the main paragraph.'

mainBody.appendChild(mainHeader)
mainBody.appendChild(paragraph)
container.appendChild(mainBody)
