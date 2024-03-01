function countAnimals(heads, legs) {
  if (heads == 0 && legs == 0) return [0, 0];
  if (heads < 0 || legs < 0) return "No solutions";
  let totalChickens, totalCows;

  // Menghitung jumlah ayam
  totalChickens = (4 * heads - legs) / 2;

  // Menghitung jumlah sapi
  totalCows = heads - totalChickens;

  // Kembalikan hasilnya dalam bentuk array
  if (totalCows < 0 || totalChickens < 0) return "No solutions";
  return [totalChickens, totalCows];
}

// Contoh penggunaan
console.log(countAnimals(11.5, 0.5)); // Output: [8, 12]
