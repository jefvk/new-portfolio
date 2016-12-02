function main() {
  var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
});
}

function click () {

  var cellen = document.getElementsByClassName("carousel-cell");
  var i = 0;

  while (i < cellen.length) {

        cellen[i].onclick = function (){

            var id = this.getAttribute("data-id");
            console.log(id);

             var uitleg = document.getElementsByName('uitleg');
             var ii = 0;

             while (ii < uitleg.length) {

               uitleg[ii].className = "pure-u-1 frontpage uitleg invisible"

              if (id === uitleg[ii].getAttribute("data-id")){
                uitleg[ii].className = "pure-u-1 frontpage uitleg";
              }

              ii++;
             }
        }
  i++;
  }

}



window.onload = function() {
       main();
       click();
}
