function up(max) {
    document.getElementById("number").value = parseInt(document.getElementById("number").value) + 1;
    if (document.getElementById("number").value >= parseInt(max)) {
        document.getElementById("number").value = max;
    }
}
function down(min) {
    document.getElementById("number").value = parseInt(document.getElementById("number").value) - 1;
    if (document.getElementById("number").value <= parseInt(min)) {
        document.getElementById("number").value = min;
    }
}

