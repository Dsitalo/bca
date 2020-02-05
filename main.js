window.onload = function () {
    let theory_block = document.querySelector(".study_info_th");
    let practice_block = document.querySelector(".study_info_pr");

    let theory = document.querySelector("#theory_program");
    let practice = document.querySelector("#practice_program");
    theory.style.display = "none";
    practice.style.display = "none";

    theory_block.onclick = function () {
        if (theory.style.display == "none") {
            theory.style.display = "block";
        } else {
            theory.style.display = "none";
        }
    }

    practice_block.onclick = function () {
        if (practice.style.display == "none") {
            practice.style.display = "block";
        } else {
            practice.style.display = "none";
        }
    }
    
    function Tabs() {
        var bindAll = function() {
          var menuElements = document.querySelectorAll('[data-tab]');
          for(var i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
          }
        }
      
        var clear = function() {
          var menuElements = document.querySelectorAll('[data-tab]');
          for(var i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('contacts-btn_checked');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
          }
        }
      
        var change = function(e) {
          clear();
          e.target.classList.add('contacts-btn_checked');
          var id = e.currentTarget.getAttribute('data-tab');
          document.getElementById(id).classList.add('active');
        }
      
        bindAll();
      }
      
      var connectTabs = new Tabs();
    
          
}
