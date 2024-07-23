const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class 'price'
    const prices = document.querySelectorAll('.price');
    
    // Calculate the sum of all prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Create a new row for the total price
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span the cell across two columns
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalRow.appendChild(totalCell);

    // Add the new row to the table
    document.querySelector('table').appendChild(totalRow);

    // Display the total price in the div with id 'ans'
    document.getElementById('ans').textContent = `Total Price: Rs ${total}`;
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
