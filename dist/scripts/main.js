$(".scrollto").on("click",function(t){$("html, body").animate({scrollTop:$("div#"+$(t.target).attr("id")).offset().top-60},1e3)});