
let arry=['ali','mahdi','abdalrahman','andher','haeder','fadhel'];
let ages=['20 years old' ,'20 years old','20 years old','20 years old','20 years old','20 years old']
let container=document.createElement('div')
document.body.appendChild(container);
container.style.textAlign='center';
function element (arry,ages) {
	//element
let card=document.createElement('div')
let title=document.createElement('h1')
let age=document.createElement('h2')
let img=document.createElement('img')
//content

let head=document.createTextNode(arry)
let ageContent=document.createTextNode(ages)
img.src='https://pbs.twimg.com/media/GYElaFSXEAArYVw?format=jpg&name=large'
title.appendChild(head);
age.appendChild(ageContent);

card.style.width='200px';
img.style.width = '100%';

card.style.background='#444';
card.style.color='#fff';
card.style.padding='10px';
card.style.margin='5px';

card.style.display='inline-block';





card.appendChild(title);
card.appendChild(age);
card.appendChild(img);

container.appendChild(card);

	// body...
} 
for (i=0;i<6;i++) {
	
	element(arry[i],ages[i])


	}