function findNextSquare(sq) {
    // Encontre a raiz quadrada do número dado
    const sqrt = Math.sqrt(sq);
  
    // Verifique se o número dado é um quadrado perfeito
    if (Number.isInteger(sqrt)) {
      // Encontre o próximo quadrado perfeito após o número dado
      const nextSqrt = sqrt + 1;
  
      // Calcule o próximo número quadrado perfeito
      const nextSquare = nextSqrt * nextSqrt;
  
      return nextSquare;
    } 
      return -1; // O número dado não é um quadrado perfeito
    }
  

console.log(findNextSquare(7))