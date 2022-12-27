pragma solidity ^0.8.10;

// Receipt()

contract Receipt2 {
  address public minter;

  constructor() {
    minter = msg.sender;
    // Product[1] memory products = [Product(123, "qwejoi", "qwejio")];
    // string memory storeId = "QWIOEqowe";
    // string memory date = "QWOJIEQWE";
    // createReceipt(products, storeId, date);
  }

  // uint public count = 0;

  struct Warranty {
    string expiryDate;
  }

   struct Product {
    uint id;
    string name;
    string price;
  }

  struct ReceiptObj {
    string storeId;
    string date;
  }

  function createReceipt(string memory storeId, string memory date) pure public {
    ReceiptObj(storeId, date);
  }
}