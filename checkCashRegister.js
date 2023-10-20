function checkCashRegister(price, cash, cid) {
   const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
   ];

   let changeDue = cash - price;
   let changeArr = [];
   let totalCid = 0;

   for (let unit of cid) {
      totalCid += unit[1];
   }
   totalCid = Math.round(totalCid * 100) / 100;

   if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
   } else if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
   }

   for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const unitName = currencyUnits[i][0];
      const unitValue = currencyUnits[i][1];
      const unitAvailable = cid[i][1];
      let unitCount = unitAvailable / unitValue;
      let unitChange = 0;

      while (changeDue >= unitValue && unitCount > 0) {
         changeDue -= unitValue;
         changeDue = Math.round(changeDue * 100) / 100;
         unitCount--;
         unitChange += unitValue;
      }

      if (unitChange > 0) {
         changeArr.push([unitName, unitChange]);
      }
   }

   if (changeDue === 0) {
      return { status: "OPEN", change: changeArr };
   } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
   }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
