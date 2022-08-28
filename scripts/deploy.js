const main = async () => {
	let characters = [
		{
			name: "Ruby",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/9/9b/Ruby_Form_Two_by_AireDaleDogz.png/revision/latest?cb=20200907180423&path-prefix=pt-br",
			hp: 300,
			atck: 30
		},
		{
			name: "Safira",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/0/07/Sapphire_Form_Two_by_BlueLys.png/revision/latest?cb=20200907180735&path-prefix=pt-br",
			hp: 200,
			atck: 120
		},
		{
			name: "Perola",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/c/cf/Pearl_Change_Your_Mind_Requested_by_RylerGamerDBS.png/revision/latest?cb=20210102164005&path-prefix=pt-br",
			hp: 500,
			atck: 50
		},
		{
			name: "Ametista",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/7/75/Amethyst_Change_Your_Mind_Outfit_by_TheOffColors.png/revision/latest?cb=20210102164115&path-prefix=pt-br",
			hp: 400,
			atck: 25
		},
		{
			name: "Steven",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/7/7e/Steven_Universe_Age_16_Two_by_TheOffColors.png/revision/latest?cb=20200907132123&path-prefix=pt-br",
			hp: 350,
			atck: 50
		}
		,
		{
			name: "Peridot",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/2/27/Peridot_Season_Six_Render_by_TheOffColors.png/revision/latest?cb=20200905181358&path-prefix=pt-br",
			hp: 300,
			atck: 100
		}
		,
		{
			name: "Lapis Lazuli",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/b/b8/Lapis_Lazuli_Season_Six_by_TheOffColors.png/revision/latest?cb=20200830181430&path-prefix=pt-br",
			hp: 500,
			atck: 75
		}
		,
		{
			name: "Bismuto",
			image: "https://static.wikia.nocookie.net/stevenuniverso/images/6/66/Bismuth_S.U_The_Movie_Form_Regeneration_by_CGBomniverse.png/revision/latest?cb=20200915163209&path-prefix=pt-br",
			hp: 600,
			atck: 50
		}
	]

	let bigBoss = {
		name: "Diamante Branco",
		image: "https://static.wikia.nocookie.net/stevenuniverso/images/0/0a/White_Diamond_%28S5_Stars%29_by_RylerGamerDBS.png/revision/latest?cb=20200505003014&path-prefix=pt-br",
		hp: 20000,
		atck: 75
	}


	const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
	const gameContract = await gameContractFactory
		.deploy(characters.map(({ name }) => name),
			characters.map(({ image }) => image),
			characters.map(({ hp }) => hp),
			characters.map(({ atck }) => atck),
			bigBoss.name, bigBoss.image, bigBoss.hp, bigBoss.atck);
	await gameContract.deployed();
	console.log("Contrato implantado no endereço:", gameContract.address);


	let txn;

	// // for (let index = 0; index < characters.length; index++) {
	// 	txn = await gameContract.mintCharacterNFT(1)
	// 	await txn.wait()
	// 	console.log("Mintou NFT x#",  1);
	// 	txn = await gameContract.attackBoss();
	// 	await txn.wait()
	// // }



	console.log('Fim do deploy e mint')
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();