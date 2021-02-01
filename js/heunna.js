//라이트 박스
            $(".lightgallery").lightGallery({
                thumbnail: true,
                autoplay: true,
                pause: 3000,
                progressBar: true
            });
        
            //윈도우 팝업
            $(".window").click(function(e){
                e.preventDefault();
                //window.open("파일명", "팝업이름", "옵션설정");
                //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
                window.open("sample_popup.html","popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
            });
            
            //레이어 팝업
            $(".layer").click(function(e){
                e.preventDefault();
                //$("#layer").css("display","block");//css작업. display를 block으로 하면 보이게 된다.
                //$("#layer").show();
                //$("#layer").fadeIn();
                $("#layer").slideDown(200);
            });
            $("#layer .close").click(function(e){
                e.preventDefault();
                //$("#layer").css("display","block");//css작업. display를 block으로 하면 보이게 된다.
                //$("#layer").show();
                //$("#layer").fadeOut();
                $("#layer").slideUp(200);
            });
           //탭메뉴
           var $tab_list = $(".tab_menu");//.tab_menu를 jquery에서 쓰기 위해 변수화시킴
           
           $tab_list.find("ul ul").hide();
           $tab_list.find("li.active > ul").show();/*li에 active가 붙은 ul은 show*/
           
           function tabMenu(e){
               e.preventDefault();
               var $this = $(this);//첫 번째/두번째/세번째 탭을 클릭했을 때 그 데이터 값이 저장됨.
               $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
           }
           $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);//tabMenu를 클릭했을 때 함수 호출, 실행. focus는 웹표준을 준수하기 위함. 그냥 그렇구나 하고 넘어가면 됨.   
           
           //배너(html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출)
           $(".ban").slick({});
        
            //갤러리(slick을 쓸 것이기 때문에 html을 slick format대로 맞춰준다.)
            $(".gallery_img").slick({
                arrows: false,//버튼을 없애주기 위해
                fade: true,
                pauseOnHover: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 300,
                slidesToShow: 1
            });
            //버튼과 연동시킨다
            $(".play").click(function(){
                $(".gallery_img").slick("slickPlay");
            });
            $(".pause").click(function(){
            $(".gallery_img").slick("slickPause");
            });
            $(".prev").click(function(){
                $(".gallery_img").slick("slickPrev");
            });
            $(".next").click(function(){
                $(".gallery_img").slick("slickNext");
            });
        
            //전체 메뉴(버튼을 눌렀을 때 숨겨진 메뉴가 보이는 동작)
            $(".tit .btn").click(function(e){
            e.preventDefault();//클릭했을 때 (0,0)으로 이동하는 것을 차단시켜준다.
           //$("#cont_nav").css("display","block"); 
            //$("#cont_nav").show();
            //$("#cont_nav").fadeIn();
            //$("#cont_nav").slideDown();
            //$("#cont_nav").toggle();
            //$("#cont_nav").fadeToggle();
            $("#cont_nav").slideToggle(200);//0.2초. 빠르게
            $(".tit .btn").toggleClass("on");//addClass와 removeClass 합한 것. 버튼을 누르면 on으로 바꿔주고 on일 때 css 작업해준다.(go to css .tit .btn)
            $(this).toggleClass("on");//자기 자신은 this
        });