const creatorName = document.querySelector('.creator-name');
const creatorImage = document.querySelector('.creator img');
const productImage = document.querySelector('.card-image img');
const productTitle = document.querySelector('h1 a');

creatorName.addEventListener('mouseover', function(){
  // productImage.style.transform = 'scale(1.07,1.07)'
  creatorImage.style.transform = 'scale(1.5,1.5) translateX(-1px)';
  creatorImage.style.borderColor = 'hsla(178, 100%, 50%, 50%)';
});
creatorName.addEventListener('mouseout', function(){
  // productImage.style.transform = 'scale(1,1)';
  // productImage.style = '';
  creatorImage.style = '';
});


productTitle.addEventListener('mouseover', function(){
  // productImage.style.border = '3px solid hsla(178, 100%, 50%, 50%)';
  productImage.style.outline = '3px solid hsla(178, 100%, 50%, 50%)';
});
productTitle.addEventListener('mouseout', function(){
  // productImage.style.border = '3px solid hsla(178, 100%, 50%, 0%)';
  productImage.style.outline = '3px solid hsla(178, 100%, 50%, 0%)';
});