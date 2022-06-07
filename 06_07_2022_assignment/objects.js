function displaySales(sales) {
    for (Item in sales) {
        if (sales[Item].Discount) {
            sales[Item].Sale = Math.floor((sales[Item].Original * (1 - sales[Item].Discount)) * 100) / 100; // Round down to the nearest two decimals
        } else {
            sales[Item].Sale = sales[Item].Original;
        }
    }
    result = JSON.stringify(sales, null, 2)
    result = result.replace(/\"/g, ''); // Remove the quotations
    
    console.log(result);
}

displaySales(
    [
        { Item: 'PS4 Pro', Stock: 3, Original: 399.99 }, 
        { Item: 'Xbox One X', Stock: 1, Original: 499.99, Discount: 0.1 }, 
        { Item: 'Nintendo Switch', Stock: 4, Original: 299.99 }, 
        { Item: 'PS2 Console', Stock: 1, Original: 299.99, Discount: 0.8 }, 
        { Item: 'Nintendo 64', Stock: 2, Original: 199.99, Discount: 0.65 }
    ]);