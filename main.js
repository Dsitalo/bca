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

          }
        }
      
        var change = function(e) {
          clear();
          e.target.classList.add('contacts-btn_checked');
            let map = document.querySelector("#Map");
            if (e.target.id === "btnSecond") {
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.9363887449726!2d34.98288205148268!3d48.476933735340765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3b54ab6bf99%3A0x75c1cedbe58470ba!2z0L_RgNC-0YHQvy4g0KHQtdGA0LPQtdGPINCd0LjQs9C-0Y_QvdCwLCA2OCwg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1578480966208!5m2!1sru!2sua";
            } else if (e.target.id === "btnThird") {
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.5513467131277!2d34.68390665148233!3d48.46513723616656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbdd204ad1f5a3%3A0x32d338ff31614c54!2z0JTRg9C90LDQudGB0LrQsNGPINGD0LsuLCA0MdCQ0JoyLCDQmtCw0LzQtdC90YHQutC-0LUsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1MTkwOQ!5e0!3m2!1sru!2sua!4v1578481248437!5m2!1sru!2sua";
            } else {
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.5560276059555!2d35.0454227514823!3d48.46504743617286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2dd602611c3%3A0xa89ca2a3e4ec49c!2z0YPQuy4g0KbQtdC90YLRgNCw0LvRjNC90LDRjywgNiwg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1578480652875!5m2!1sru!2sua";
            }
        }
        bindAll();

      }
      
      var connectTabs = new Tabs();

          
}
