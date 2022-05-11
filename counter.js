function waCounter(selector, values) {
    var counter = document.querySelector(selector);
    var items = counter.querySelectorAll('.wa-item');
    var time = values.time;

    items.forEach(function(item, _) {
        var counter = 0;
        var value = item.innerText;
        var start = new Date().getTime();
        const timer = setInterval(function() {
            var end = new Date().getTime();            
            if((end - start) <= time) {
                counter += Math.ceil(value / (time / 100));                
                item.innerText = counter;                                         
            } else {
                clearInterval(timer);
                item.innerText = value;
            }
        }, 100);   
    })
}