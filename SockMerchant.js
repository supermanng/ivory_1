function sockMerchant(n, ar) {
    if (n < 1 || n > 100 || ar.length !== n || ar.some(color => color < 1 || color > 100)) {
        // Handle invalid input
        console.error("Invalid input. Please check the constraints.");
        return;
    }

    const colorCounts = {}; // Object to store the count of each color
    
    // Count the occurrences of each color
    ar.forEach(color => {
        colorCounts[color] = (colorCounts[color] || 0) + 1;
    });

    // Calculate the number of pairs
    let numPairs = 0;
    Object.values(colorCounts).forEach(count => {
        numPairs += Math.floor(count / 2);
    });

    return numPairs;
}
export default sockMerchant;

// Example usage:
const n = 9;
const sockColors = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(n, sockColors);
console.log("Number of sock pairs:", result);