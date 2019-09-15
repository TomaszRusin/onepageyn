const innerHTML = `
<div class="overlay">
  <div class="indicator">
    <input 
      type="number" 
      min="0" 
      max="100" 
    />
  </div>
  <div class="belt">
    <div class="green"></div>
    <div class="red"></div>
  </div>
</div>`;

window.addEventListener('load', function() {
    $(".slidebar").each(function() {
        const slidebar = this;
        this.dataset.value = '';
        this.dataset.green = false;

        this.innerHTML = innerHTML;
        $(this).find("input")[0].onchange = function(e) {
            if (e.target.value > 100) {
                event.target.value = 100;
            }
            slidebar.dataset.value = e.target.value;
            var elements = $(slidebar).find('.red');
            var requiredElement = elements[0];
            console.log(`transform: translateX(${e.target.value}%);`)
            $(requiredElement).css("transform", `translateX(${e.target.value}%)`)

        };
        setInterval(() => toggleBar(this), 1500)
    });
})

function toggleBar(slidebar) {
    if (!slidebar.dataset.value) {
        var elements = $(slidebar).find('.red');
        var requiredElement = elements[0];
        console.log('setting')
        if (slidebar.dataset.green) {
            console.log('red');
            requiredElement.style.cssText = `transform: translateX(40%);`
            slidebar.dataset.green = false;
        } else {
            console.log('green')
            requiredElement.style.cssText = `transform: translateX(60%);`
            slidebar.dataset.green = true;
        }

    }
}
/*
class Meter extends React.Component {

handleChange(e) {
if(e.target.value > 100){
event.target.value = 100;
}
this.setState({value: e.target.value})
var elements = document.getElementsByclass('red');
var requiredElement = elements[0];
requiredElement.style.cssText = `transform: translateX(${e.target.value}%);`
}

toggleBar() {
if (!slidebar.dataset.value) {
var elements = document.getElementsByclass('red');
var requiredElement = elements[0];
console.log('setting')
if(slidebar.dataset.green){
console.log('red');
requiredElement.style.cssText = `transform: translateX(40%);`
this.setState({green: false});
}else {
console.log('green')
requiredElement.style.cssText = `transform: translateX(60%);`
this.setState({green: true});
}

}
}

componentWillMount() {
setInterval(() => this.toggleBar(), 1500)
}

render() {
return (
<div class="app">
</div>
);
}
}

ReactDOM.render(<Meter />, document.getElementById('app'));*/