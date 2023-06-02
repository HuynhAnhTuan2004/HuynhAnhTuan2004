    const hamburger_menu = document.querySelector('.menu-btn');
    const menu_close = document.querySelector('.collapse');
    // const menu_items = menu_close.querySelectorAll('li'); // Lấy danh sách các phần tử li
    hamburger_menu.addEventListener("click",function(){
  
      if(menu_close.classList.contains('menu-close')){
        menu_close.classList.remove('menu-close');
      }else{
        menu_close.classList.add('menu-close');
      }
      
      // // Thêm sự kiện click cho từng phần tử li
      // menu_items.forEach(item => {
      //   item.addEventListener("click", function() {
      //     // Xử lý các phương thức khi người dùng click vào mỗi phần tử li
      //     console.log(`Bạn đã chọn phương thức ${item.textContent}`);
      //   });
      // });
    });