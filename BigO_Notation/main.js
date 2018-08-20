document.addEventListener("DOMContentLoaded", function(event) {
    function addUpTo(n) {
        let total = 0;
        for (let i = 0; i <= n; i++) {
            total += i;
        }
        return total;
    }
    function addUpTo2(n) {

    }
    console.log(addUpTo(6));
});