/*-------------------Слайдер----------------------*/


  $('.slider').slick({
  	dots:true,
  	autoplay:true,
  	autoplaySpeed:2000,
  	responsive:true,
	pauseOnDotsHover:true,
  	
  })

/*Смена фона при лайке*/

  var likedButtons  = document.querySelectorAll('.addLike');
  var numberOfLikedItems = document.getElementById('likeNumber');
  
  

for(var i=0; i< likedButtons.length; i++){


	let changeButton = likedButtons[i];
	var currentNumberOfLike = 0;
	currentNumberOfLike = +numberOfLikedItems.textContent;

	changeButton.onclick = function(){
		if(changeButton.classList.contains('liked')){
    		changeButton.classList.remove('liked');
    		currentNumberOfLike -= 1;
    		
    	}else{
    		changeButton.classList.add('liked');
    		currentNumberOfLike += 1;
    		
    		
    	}

    	if(currentNumberOfLike > 0){

 		document.getElementById('likeNumber').style.display='block';
		}else{
		document.getElementById('likeNumber').style.display='none';	
		}

    	numberOfLikedItems.textContent = currentNumberOfLike;

    	console.log(currentNumberOfLike);

    	

}

}



/*добавить в корзину*/


var productsCount = document.getElementById('checkNumber');

var addToCartButtons  = document.querySelectorAll('.add-to-cart');


for(var i=0; i< addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener('click', function(){
		var prevProductsCount = +productsCount.textContent;
        productsCount.textContent = prevProductsCount +1;

        if(productsCount.textContent > 0){
 document.getElementById('checkNumber').style.display='block';

}else{
		document.getElementById('checkNumber').style.display='none';	
		}

	})
}





