var width = window.outerWidth;

/* Сдайдер сертификатов */
var certificate_node = document.querySelectorAll(".over-foto");
var certificate_arr = [certificate_node.length];
var current_certificate = null;
var certificates_prev = document.querySelector(".certificates-prev");
var certificates_next = document.querySelector(".certificates-next");
var overlay = document.querySelector(".overlay");

function Page_width() {
  width = window.outerWidth;
  if(width > 992) {
    menu_btn.classList.remove("fixed"); 
  } else {
    menu_btn.classList.add("fixed");
  }
  Slider(width);
}

function Slider(width) {  
  var items;
  if(width >= 1201) {
    items = 4;
  } else if(width < 1201 && width >= 993) {
    items = 3;
  } else if(width < 993 && width >= 769) {
    items = 2;
  } else if(width < 769) {
    items = 1;
  };
  
  if(certificate_node.length > 0) {
    for (var i = 0; i < certificate_node.length; i++) {
      certificate_arr[i] = certificate_node.item(i);
    }
    
    for(var i = 0; i < certificate_arr.length; i++) {
      certificate_arr[i].classList.remove("show");
    };
  

    certificate_arr.forEach(function(item, i, certificate_arr) {
      certificate_arr[i].addEventListener("click", function(event) {
        event.preventDefault();
        img = document.createElement('img');
        imgHref = certificate_arr[i].getAttribute('href');
        img.setAttribute('src', imgHref);
        current_certificate = i;
        overlay.classList.add("show", "animated", "fadeIn");
        overlay.appendChild(img);
        if(overlay.classList.contains("show")) {
          overlay.addEventListener("click", function() {
            overlay.classList.remove("show");
            overlay.removeChild(img);
          })
        }
      })
    })

    for(var i = 0; i < certificate_arr.length; i++) {
      if(document.querySelector(".main-inner.otzyvy")){
        certificate_arr[i].classList.add("show");
      } else {
        if(i < items) {
          certificate_arr[i].classList.add("show");
        }
      }
    };
    
    if(certificates_next) {
    certificates_next.addEventListener("click", function(event) {  
      for(var i = 0; i < certificate_arr.length; i++) {
        if(certificate_arr[i].classList.contains("show")) {
          break;
        }
      }
      if((i+items) >= certificate_arr.length) {
      } else {
        certificate_arr[i].classList.remove("show");
        certificate_arr[i+items].classList.add("show");
      } 
    });

    certificates_prev.addEventListener("click", function(event) {
      var last;
      for(var i = 0; i < certificate_arr.length; i++) {
        if(certificate_arr[i].classList.contains("show")) {
        last = i;
        }
      }
      i = last;
      if((i-items) < 0) {
      } else {
        certificate_arr[i].classList.remove("show")
        certificate_arr[i-items].classList.add("show")
      }
    });  
    }
    
    
  }
}

// Слайдер сертификатов на странице сертификатов
var main_certificates = document.querySelector(".main-inner.sertifikaty");

if(main_certificates) {
  var block_certificates_node = document.querySelectorAll(".block-inner-certificates");
  var block_certificates_arr = [block_certificates_node.length];
  
  for(var i = 0; i < block_certificates_node.length; i++) {
    block_certificates_arr[i] = block_certificates_node.item(i);
  }

  block_certificates_arr.forEach(function(item, i, block_certificates_arr) {
    var main_img_node = block_certificates_arr[i].querySelectorAll(".main-img");
    var main_img_arr = [main_img_node.length];
    var small_img_node =  block_certificates_arr[i].querySelectorAll(".small-certificates-img");
    var small_img_arr = [small_img_node.length];
    var prev =  block_certificates_arr[i].querySelector(".certificates-inner-prev");
    var next =  block_certificates_arr[i].querySelector(".certificates-inner-next");
    var items;

    if(width >= 1201) {
      items = 4;
    } else if(width < 1201 && width >= 993) {
      items = 3;
    } else if(width < 993 && width >= 769) {
      items = 2;
    } else if(width < 769) {
      items = 1;
    };

    if(main_img_node.length > 0) {
      for (var i = 0; i < main_img_node.length; i++) {
        main_img_arr[i] = main_img_node.item(i);
        small_img_arr[i] = small_img_node.item(i);
      }
    }
    
    for(var i = 0; i < small_img_arr.length; i++) {
      if(i < items) {
        small_img_arr[i].classList.add("show");
      }
    };
  })

  
   
block_certificates_arr.forEach(function(item, i, block_certificates_arr) {
    var main_img_node = block_certificates_arr[i].querySelectorAll(".main-img");
    var main_img_arr = [main_img_node.length];
    var small_img_node = block_certificates_arr[i].querySelectorAll(".small-certificates-img");
    var small_img_arr = [small_img_node.length];
    var prev = block_certificates_arr[i].querySelector(".certificates-inner-prev");
    var next = block_certificates_arr[i].querySelector(".certificates-inner-next");
    var items;
    
    if(width >= 1201) {
      items = 4;
    } else if(width < 1201 && width >= 993) {
      items = 3;
    } else if(width < 993 && width >= 769) {
      items = 2;
    } else if(width < 769) {
      items = 1;
    };
  
  
    var main_img_curr = document.querySelectorAll(".main-img.current");
    var cert_top = document.querySelector(".certificates-top");
    var main_img_curr_arr = [main_img_curr.length];
    
    if(main_img_node.length > 0) {
      for (var i = 0; i < main_img_node.length; i++) {
        main_img_arr[i] = main_img_node.item(i);
        small_img_arr[i] = small_img_node.item(i);
        main_img_curr_arr[i] = main_img_curr.item(i);
      }

      for(var i = 0; i < small_img_arr.length; i++) {
        if(i < items) {
          small_img_arr[i].classList.add("show");
        }
      };
    
      next.addEventListener("click", function(event) {  
        for(var i = 0; i < small_img_arr.length; i++) {
          if(small_img_arr[i].classList.contains("show")) {
            break;
          }
        }        
        
        if((i+items) >= small_img_arr.length) {
        } else {
          small_img_arr[i].classList.remove("show");
          small_img_arr[i+items].classList.add("show");
        }
          
        for(var y = 0; y < small_img_arr.length; y++) {
          if(small_img_arr[y].classList.contains("current")) {
            break;
          }
        }
        if((y + 1) < small_img_arr.length) {
          for(var i = 0; i < main_img_arr.length; i++) {
            main_img_arr[i].classList.remove("current");
          }
          small_img_arr[y].classList.remove("current");
          small_img_arr[y+1].classList.add("current");
          main_img_arr[y+1].classList.add("current");
        }

      });

      prev.addEventListener("click", function(event) {
        var last;
        for(var i = 0; i < small_img_arr.length; i++) {
          if(small_img_arr[i].classList.contains("show")) {
            last = i;
          }
        }
        
        i = last;
        if((i-items) < 0) {
        } else {
          small_img_arr[i].classList.remove("show")
          small_img_arr[i-items].classList.add("show")
        }
              
        var last_curr;
        for(var y = 0; y < small_img_arr.length; y++) {
          if(small_img_arr[y].classList.contains("current")) {
            last_curr = y;
          }
        }
        y = last_curr;
  
        if(y > 0) {
          small_img_arr[y].classList.remove("current");
          small_img_arr[y-1].classList.add("current");        
          for(var i = 0; i < main_img_arr.length; i++) {
            main_img_arr[i].classList.remove("current");
          }
          main_img_arr[y-1].classList.add("current");
        }
      });
      
      small_img_arr.forEach(function(item, i, small_img_arr) { //Кликалка по маленьким картинкам
        small_img_arr[i].addEventListener("click", function(event){
          for(var y = 0; y < small_img_arr.length; y++) {
            if(small_img_arr[y].classList.contains("current")) {
              small_img_arr[y].classList.remove("current");
            }
          }
          small_img_arr[i].classList.add("current");
          
          for(var y = 0; y < main_img_arr.length; y++) {
            main_img_arr[y].classList.remove("current");
          }
          main_img_arr[i].classList.add("current");
        })
      })
      
      
      var overlay = document.querySelector(".overlay");
      main_img_arr.forEach(function(item, i, main_img_arr) {
        
        main_img_arr[i].addEventListener("click", function(event) {
          overlay.classList.add("show");
          if(overlay.classList.contains("show")){
            overlay.addEventListener("click", function() {
              overlay.classList.remove("show");
            })
          }
        })
      })     
    }
  })
}

// Всплывающие формы 
var overlay_offer = document.querySelector(".modal-offer");
var overlay_call = document.querySelector(".modal-call");
var btn_offer_node = document.querySelectorAll(".btn-offer-js");
var btn_offer_arr = [btn_offer_node.length];
var btn_call_node = document.querySelectorAll(".btn-call-js");
var btn_call_arr = [btn_call_node.length];
var close_offer = document.querySelector(".close-offer");
var close_call = document.querySelector(".close-call");

btn_offer_arr = [].slice.call(btn_offer_node);
btn_call_arr = [].slice.call(btn_call_node);

btn_offer_arr.forEach(function(item, i, btn_offer_arr) {
  btn_offer_arr[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay_offer.classList.add("show");
  });  
})

btn_call_arr.forEach(function(item, i, btn_call_arr) {
  btn_call_arr[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlay_call.classList.add("show");
  });  
})

close_call.addEventListener("click", function(event) {
  event.preventDefault();
  overlay_call.classList.remove("show");
});

close_offer.addEventListener("click", function(event) {
  event.preventDefault();
  overlay_offer.classList.remove("show");    
});

// отзывы
/*if(document.querySelector(".main-inner.otzyvy")){
  
  var review_img_node = document.querySelectorAll(".review-img");
  var review_img_arr = [review_img_node.length];
  var big_review_img_node = document.querySelectorAll(".big-review-img");
  var big_review_img_arr = [big_review_img_node.length];
  
  var over = document.querySelector(".main-inner.otzyvy .overlay");
  
  for(var i = 0; i < review_img_node.length; i++) {
    review_img_arr[i] = review_img_node.item(i);
    big_review_img_arr[i] = big_review_img_node.item(i);
  }
  
  review_img_arr.forEach(function(item, i, review_img_arr) {
    review_img_arr[i].addEventListener("click", function(){
      over.classList.add("show");
      big_review_img_arr[i].classList.add("show");
      if(over.classList.contains("show")){
        over.addEventListener("click", function() {
          over.classList.remove("show");
          big_review_img_arr[i].classList.remove("show");
        })
        big_review_img_arr[i].addEventListener("click", function() {
          over.classList.remove("show");
          big_review_img_arr[i].classList.remove("show");
        })
      }
    })
  })
}
*/
// Mobile header
var header_top = document.querySelector(".header-top");
var menu_btn = document.querySelector(".mobile-menu-btn");
var header_middle = document.querySelector(".header-middle");
var menu = document.querySelector(".header-bottom");
var form_search_btn = document.querySelector(".btn-open-search");
var form_search = document.querySelector(".form-search");
var scrolled = window.pageYOffset || document.documentElement.scrollTop;


window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled) {
    header_top.classList.add("fixed");
    /*menu_btn.classList.add("fixed");*/
    header_middle.classList.add("fixed");
    menu.classList.add("fadeInDown");
  } else {
    if(header_top.classList.contains("fixed")) {
      header_top.classList.remove("fixed");
      header_middle.classList.remove("fixed");
      /*menu_btn.classList.remove("fixed");*/
    }
  }
}


menu_btn.addEventListener("click", function() {
  if(menu.classList.contains("fixed")) {
    menu.classList.remove("fixed");
    menu.classList.remove("faedInDown");
    menu.classList.add("faedInTop");
    menu_btn.classList.remove("active");  
    /*menu_btn.classList.remove("fixed");  */
  } else {
    /*menu_btn.classList.add("fixed"); */
    menu.classList.add("fixed");
    menu.classList.add("fadeInDown");
    menu.classList.remove("fadeInTop");
    menu_btn.classList.add("active");  
    menu.classList.add("faedInTop");
  }
})

form_search_btn.addEventListener("click", function(event) {
  event.preventDefault();
  form_search.classList.add("fixed");
})

Page_width();
