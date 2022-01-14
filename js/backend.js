$(document).ready(function(){
    $("img#img-design").click(function(){
      $("p#design-dis").toggle();
      $("img#img-design").toggle();
    });
    $("img#img-dev").click(function(){
      $("p#dev-dis").toggle();
      $("img#img-dev").toggle();
    });

    $("img#img-product").click(function(){
      $("p#product-dis").toggle();
      $("img#img-product").toggle();
    });
    $("img#proj1").hover(function(){
      $("p#work1").show();
    });
});