function myfunc() {

    let b1Element = document.querySelector(`#b1`).value;
    let b2Element = document.querySelector(`#b2`).value;
    let b3Element = document.querySelector(`#b3`).value;
    let b4Element = document.querySelector(`#b4`).value;
    let b5Element = document.querySelector(`#b5`).value;
    let b6Element = document.querySelector(`#b6`).value;
    let b7Element = document.querySelector(`#b7`).value;
    let b8Element = document.querySelector(`#b8`).value;
    let b9Element = document.querySelector(`#b9`).value;

    if(b1Element.toLowerCase() == `x` && b2Element.toLowerCase() == `x` && b3Element.toLowerCase() == `x`) {
        alert(`You are a winner`);
        reset();
    } else if (b4Element.toLowerCase() == `x` && b5Element.toLowerCase() == `x` && b6Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b7Element.toLowerCase() == `x` && b8Element.toLowerCase() == `x` && b9Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b1Element.toLowerCase() == `x` && b4Element.toLowerCase() == `x` && b7Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b2Element.toLowerCase() == `x` && b5Element.toLowerCase() == `x` && b8Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b3Element.toLowerCase() == `x` && b6Element.toLowerCase() == `x` && b9Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b1Element.toLowerCase() == `x` && b5Element.toLowerCase() == `x` && b9Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b3Element.toLowerCase() == `x` && b5Element.toLowerCase() == `x` && b7Element.toLowerCase() == `x`) {
        window.alert(`You are a winner`);
        reset();
    };
     
    if(b1Element.toLowerCase() == `0` && b2Element.toLowerCase() == `0` && b3Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b4Element.toLowerCase() == `0` && b5Element.toLowerCase() == `0` && b6Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b7Element.toLowerCase() == `0` && b8Element.toLowerCase() == `0` && b9Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b1Element.toLowerCase() == `0` && b4Element.toLowerCase() == `0` && b7Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b2Element.toLowerCase() == `0` && b5Element.toLowerCase() == `0` && b8Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b3Element.toLowerCase() == `0` && b6Element.toLowerCase() == `0` && b9Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b1Element.toLowerCase() == `0` && b5Element.toLowerCase() == `0` && b9Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    } else if (b3Element.toLowerCase() == `0` && b5Element.toLowerCase() == `0` && b7Element.toLowerCase() == `0`) {
        window.alert(`You are a winner`);
        reset();
    };
}

function reset() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
};

let flag = 1;

function setValue() {
    if(flag == 1) {
        this.value = `x`;
        this.disabled = true;
        flag = 0;
    } else {
        this.value = `0`;
        this.disabled = true;
        flag = 1;
    }
};