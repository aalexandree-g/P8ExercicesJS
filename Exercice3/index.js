function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average"
    }

    let sum = 0
    let count = 0

    for (const nb of numbers) {
        const n = parseInt(nb)
        sum += n
        count++
    }

    if (count === 0) {
        return "No numbers to calculate average"
    }

    return sum / count
}


// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
