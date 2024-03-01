// const likeOrDislike = (buttons) =>
//   buttons.reduce((p, c) => (c == p ? "Nothing" : c), "Nothing");

const likeOrDislike = (buttons) => {
  if (!buttons || buttons.length === 0) return "Nothing";

  let result = "Nothing";
  for (let i = 0; i < buttons.length; i++) {
    // Memeriksa apakah tombol saat ini sama dengan hasil sebelumnya
    if (buttons[i] === result) {
      result = "Nothing"; // Jika sama, set hasilnya menjadi "Nothing"
    } else {
      result = buttons[i]; // Jika berbeda, update hasil dengan tombol saat ini
    }
  }
  return result;
};

console.log(likeOrDislike(["Like", "Like", "Like"]));
