// BMI Calculation function
export function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

// Height Estimation function
export function estimateHeight(age) {
    if (age < 18) return 1.6; // Estimated average height in meters for minors
    if (age < 40) return 1.75; // Average height in meters for young adults
    return 1.7; // Average height in meters for older adults
}
