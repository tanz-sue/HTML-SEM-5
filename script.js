function findSecondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    if (second === -Infinity) {
        throw new Error("No second largest element exists");
    }
    return second;
}

function calculateSecondLargest() {
    const inputStr = document.getElementById("arrayInput").value.trim();
    const resultBox = document.getElementById("resultBox");

    if (!inputStr) {
        showResult("Please enter some numbers.", false);
        return;
    }


    const stringArray = inputStr.split(",");
    const numArray = [];

    for (let item of stringArray) {
        const parsedNum = Number(item.trim());
        if (isNaN(parsedNum) || item.trim() === "") {
            showResult("Please enter a valid list of numbers separated by commas.", false);
            return;
        }
        numArray.push(parsedNum);
    }

    try {
        const secondLargest = findSecondLargest(numArray);
        showResult(`Second Largest: ${secondLargest}`, true);
    } catch (err) {
        showResult(err.message, false);
    }
}

function showResult(message, isSuccess) {
    const resultBox = document.getElementById("resultBox");
    resultBox.textContent = message;
    resultBox.className = "result " + (isSuccess ? "success" : "error");
}