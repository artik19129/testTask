function updateDonut(percent, element){
  //var percent = 45;
  if (percent < 50){
    offset = (360 / 100) * percent;
    element.parentNode.querySelector("#upgrade").style.webkitTransform = "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#upgrade .progress").style.webkitTransform = "rotate(" + (180 - offset) + "deg)";
    element.parentNode.querySelector("#upgrade").style.msTransform = "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#upgrade .progress").style.msTransform = "rotate(" + (180 - offset) + "deg)";
    element.parentNode.querySelector("#upgrade").style.MozTransform = "rotate(" + offset + "deg)";
    element.parentNode.querySelector("#upgrade .progress").style.MozTransform = "rotate(" + (180 - offset) + "deg)";
    element.parentNode.querySelector("#upgrade .progress").style.backgroundColor = "#41A8AB";
  } else {
    offset = ((360 / 100) * percent) - 180;
    element.parentNode.querySelector("#upgrade").style.webkitTransform = "rotate(180deg)";
    element.parentNode.querySelector("#upgrade .progress").style.webkitTransform = "rotate(" +  offset + "deg)";
    element.parentNode.querySelector("#upgrade").style.msTransform = "rotate(180deg)";
    element.parentNode.querySelector("#upgrade .progress").style.msTransform = "rotate(" +  offset + "deg)";
    element.parentNode.querySelector("#upgrade").style.MozTransform = "rotate(180deg)";
    element.parentNode.querySelector("#upgrade .progress").style.MozTransform = "rotate(" +  offset + "deg)";
    element.parentNode.querySelector("#upgrade .progress").style.backgroundColor = "#E64C65";
  }
  element.parentNode.querySelector("span").innerHTML = percent + "%";
}

function updateSlider(element) {
  if (element) {
    var parent = element.parentElement;
    var thumb = parent.querySelector('.range-slider__thumb'),
      bar = parent.querySelector('.range-slider__bar'),
      pct = element.value * ((parent.clientHeight - thumb.clientHeight) / parent.clientHeight);
    thumb.style.bottom = pct + '%';
    bar.style.height = 'calc(' + pct + '% + ' + thumb.clientHeight / 2 + 'px)';
    thumb.textContent = element.value + '%';
  }
  updateDonut(element.value, element.parentNode);
}
(function initAndSetupTheSliders() {
  [].forEach.call(document.getElementsByClassName("container"), function(el) {
    var inputs = [].slice.call(el.querySelectorAll('.range-slider input'));
    inputs.forEach(function (input) {
      input.setAttribute('value', '50');
      updateSlider(input);
      input.addEventListener('input', function (element) {
        updateSlider(input);
      });
      input.addEventListener('change', function (element) {
        updateSlider(input);
      });
    });
  });
}());
