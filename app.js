//for header hover
document.addEventListener('DOMContentLoaded',
      function () {
          const navItems = document
              .querySelectorAll('.one');
  
          navItems.forEach(item => {
              item.addEventListener('click',
                  function () {
                      navItems.forEach(navItem => navItem
                          .classList.remove('active'));
                      this.classList.add('active');
                  });
          });
      });

      function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }


      //for hamburger menu
const mainMenu = document.querySelector('ul');
      const closeMenu = document.querySelector('.closeMenu');
      const openMenu = document.querySelector('.openMenu');
      const menu_items = document.querySelectorAll('nav ul li a');
      
      
      
      
      openMenu.addEventListener('click',show);
      closeMenu.addEventListener('click',close);
      
      // close menu when you click on a menu item 
      menu_items.forEach(item => {
          item.addEventListener('click',function(){
              close();
          })
      })
      
      function show(){
          mainMenu.style.display = 'flex';
          mainMenu.style.top = '0';
      }
      function close(){
          mainMenu.style.top = '-100%';
      }