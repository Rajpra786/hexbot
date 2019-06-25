$( document ).ready(function() {

	$(".box").hide();
draw();
	

});

function draw() {
  //get colors
  NOOPBOT_FETCH({
    API: 'hexbot',
    count: 6
  }, drawSet);

}

function drawSet(responseJson) {
  let { colors } = responseJson;
  $(".layer-one").css({"border-top":"solid","border-color":colors[1].value});
  $(".layer-two").css({"border-top":"solid","border-color":colors[2].value});
  $(".layer-three").css({"border-top":"solid","border-color":colors[3].value});
  $(".layer-four").css({"border-top":"solid","border-color":colors[4].value});
  $(".layer-five").css({"border-top":"solid","border-color":colors[0].value});		
  $(".box").show();
  $(".wait").hide();
}

const API_BASE = 'https://api.noopschallenge.com';

function NOOPBOT_FETCH(options, onComplete) {

  if (!options.API) {
    console.error('API not set');
    return;
  }

  if (!onComplete) {
    console.warn('onComplete not set, nothing will happen.');
  }

  let params = [];
  Object.keys(options).forEach(key => params.push(`${key}=${options[key]}`))
  let url = `${API_BASE}/${options.API}?` + params.join('&');

  window.fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(responseJson) {
      onComplete(responseJson)
    });
}


