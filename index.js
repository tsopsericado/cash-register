var denom = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];
function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let result = {
    status: "",
    change: [],
  };
  let sumCid = 0;
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1];
  }
  if (sumCid < cid) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  if (sumCid === change) {
    result.status = "CLOSED";
    result.change = cid;
    return change;
  }

  if (sumCid > change) {
    result.status = "[]";
  }

  console.log("sumCid", sumCid);
  let newResult = [];

  cid = cid.reverse();
  for (i = 0; i < cid.length; i++) {
    let val = 0;
    while (denom[i].value <= change && cid[i][1] > 0) {
      cid[i][1] -= denom[i].value;
      change -= denom[i].value;
      val += denom[i].value;
    }
  }
  return change;
}