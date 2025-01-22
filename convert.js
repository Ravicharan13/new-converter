const EXCHANGE_RATE = 83.0; 
const convert = inr => { 
    if (isNaN(inr)) { 
        throw "Invalid amount"; 
    } else { 
        return (inr / EXCHANGE_RATE).toFixed(0); 
    } 
} 
module.exports = convert;