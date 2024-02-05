const Input = document.getElementById('input');
const IDList = ["150321","670321","123456","234567"];
const pages = ["16-17.html","18th.html","19th.html","20eth.html"]

Input.addEventListener('input', function() {
    // This function will be executed whenever the input value changes
    var inputValue = Input.value;
    console.log('Input value changed:', inputValue);
    if (inputValue.length == 6) {
        for (i=0;i<IDList.length;i++) {
            if (inputValue == IDList[i]) {
                window.location.href = pages[i];
            }
        }
    }
    // You can perform additional actions based on the new value here
});