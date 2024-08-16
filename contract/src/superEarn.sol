// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

contract superEarn{

    struct userInfo{
        uint totalAmountDeposited;
        uint totalAmountEarned;

    }
    mapping (address user => userInfo info) public userinfo;
    address admin;

    event Deposit(address depositor, uint amount);
    event Sent(address winner,uint amount);

    constructor(address _admin) {
        admin = _admin;
    }

    function setAdmin(address _admin) public {
        admin = _admin;
    }

    function deposit() public payable {
        userInfo memory info = userinfo[msg.sender];
        info.totalAmountDeposited+= msg.value;
        userinfo[msg.sender] = info;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(address[] memory winners, uint[] memory amountToWithdraw) public  {
        require(msg.sender == admin, "not authorized");
        require(winners.length == amountToWithdraw.length,"mismatched information");


        for (uint i = 0; i < winners.length; i++) {
        address payable recipient = payable(winners[i]);
        uint amount = amountToWithdraw[i];

        userInfo memory info = userinfo[recipient];
        info.totalAmountEarned+= amount;
        userinfo[recipient] = info;

        // Transfer the amount to the recipient
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Transfer failed");
        emit Sent(recipient, amount);
        }

    }
    
    receive() external payable { }
}
