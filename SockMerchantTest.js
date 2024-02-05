import sockMerchant from './SockMerchant';
const assert = require('assert');

function testSockMerchant() {
    // Test case 1
    const n1 = 9;
    const ar1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    const result1 = sockMerchant(n1, ar1);
    assert.strictEqual(result1, 3, 'Test Case 1 Failed');

    // Add more test cases as needed

    console.log('All test cases passed successfully!');
}

// Run the tests
testSockMerchant();