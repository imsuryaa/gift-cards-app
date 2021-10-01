export const comparePointsAsc = (a, b) => {
    let comparison = 0;
    if (a.cardPoints > b.cardPoints) {
        comparison = 1; 
    } else if (a.cardPoints < b.cardPoints) {
        comparison = -1;
    }
    return comparison;
} 
export const comparePointsDesc = (a, b) => {
    let comparison = 0;
    if (a.cardPoints < b.cardPoints) {
        comparison = 1; 
    } else if (a.cardPoints > b.cardPoints) {
        comparison = -1;
    }
    return comparison;
}
export const compareCountAsc = (a, b) => {
    let comparison = 0;
    if (a.cardCount > b.cardCount) {
        comparison = 1; 
    } else if (a.cardCount < b.cardCount) {
        comparison = -1;
    }
    return comparison;
} 
export const compareCountDesc = (a, b) => {
    let comparison = 0;
    if (a.cardCount < b.cardCount) {
        comparison = 1; 
    } else if (a.cardCount > b.cardCount) {
        comparison = -1;
    }
    return comparison;
} 
export const compareValidityAsc = (a, b) => {
    let comparison = 0;
    if (a.cardExpiryDate > b.cardExpiryDate) {
        comparison = 1; 
    } else if (a.cardExpiryDate < b.cardExpiryDate) {
        comparison = -1;
    }
    return comparison;
} 
export const compareValidityDesc = (a, b) => {
    let comparison = 0;
    if (a.cardExpiryDate < b.cardExpiryDate) {
        comparison = 1; 
    } else if (a.cardExpiryDate > b.cardExpiryDate) {
        comparison = -1;
    }
    return comparison;
} 
