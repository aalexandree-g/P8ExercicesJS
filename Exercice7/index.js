function convertToBinary() {
    const binaryResult = document.getElementById("binaryResult")

    const input = document.getElementById("decimalInput").value
    let number = Number(input)
    if (!Number.isInteger(number)) return

    if (number === 0) {
        binaryResult.innerText = "0"
        return
    }
    
    let binary = ""

    while (number !== 0) {
        const reste = number % 2
        number = Math.floor(number / 2)
        binary = reste.toString() + binary
    }

    binaryResult.innerText = binary
}