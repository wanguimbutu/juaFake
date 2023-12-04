// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract authentifi {
    address  owner;

    struct code{
        uint256 Size;
        uint256 Weight;
        uint256 Status;
        string ManufacturerName;
        string ProductBrand;
        string Description;
        string ManufacturerLocation;
        string ManufacturerTimeStamp;
        string retailer;
        string distributor;
        string[] customers;
    }

    struct distributorObj{
        string name;
        string location;
        string Timestamp;
    }

    struct retailerObj{
        string name;
        string location;
        string Timestamp;
    }
    struct customerObj{
        string name;
        string phone;
        string[] code;
    }
}
