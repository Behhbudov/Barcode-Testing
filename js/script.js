let number = [];

function checkBarcode() {
  const input = document.getElementById("input");
  number.push(input.value);
  // Daxil edilmiş rəqəmin 13 rəqəmli olub olmadığını yoxlayır
  if (number[0].length < 13) {
    alert("Wrong Barcode Code, You Should Add 13 Digits Number");
    input.value = "";
    number = [];
  } else {
    input.value = "";
    const numbers = number[0].split("");
    let sumEven = 0;
    let sumOdd = 0;
    let result1 = [];

    // Uyğun rəqəmləri toplayır
    numbers.map((currElement, index) => {
      if (index < numbers.length - 1) {
        if (index % 2 == 0) {
          console.log((sumEven += parseInt(currElement)));
        } else {
          console.log((sumOdd += parseInt(currElement)));
        }
      }
    });

    result1.push(sumOdd * 3 + sumEven);
    const result2 = result1[0].toString().split("");

    // Barkodun düzgün olub olmadığını yoxlayır
    numbers.map((item, index) => {
      if (index == numbers.length - 1) {
        10 - result2[result2.length - 1] == item
          ? alert("Barcode entered correctly")
          : alert("Input is incorrect information");
      }
    });

    number = [];
  }
}
