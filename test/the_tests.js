const { expect, assert } = require("chai")
const { web3, ethers } = require("hardhat")
const { BN, time, balance, expectEvent, expectRevert } = require("@openzeppelin/test-helpers")
const ether = require("@openzeppelin/test-helpers/src/ether")

let wstar
let owner, acc1, acc2, acc3

describe("Simple Tests", function () {
	beforeEach(async function () {
		let TContract = await ethers.getContractFactory("WSTAR")
		ggang = await TContract.deploy()
		await ggang.deployed()

		signers = await ethers.getSigners()
		owner = signers[0]
		acc1 = signers[1]
		acc2 = signers[2]
		acc3 = signers[3]

		const minterHash = web3.utils.soliditySha3("MINTER_ROLE")
		console.log("minterHash ", minterHash)
		const burnerHash = web3.utils.soliditySha3("BURNER_ROLE")
		console.log("burnerHash ", burnerHash)
	})

	it("simple tests", async function () {
		console.log("owner = ", owner.address)
		console.log("acc1 = ", acc1.address)
		console.log("acc2 = ", acc2.address)
		console.log("acc3 = ", acc3.address)
		expect(await wstar.totalSupply()).to.equal(0)
	})
})
