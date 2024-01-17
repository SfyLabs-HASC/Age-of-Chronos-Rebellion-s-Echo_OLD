# Age of Chronos

In this example, you will find the necessary contracts, scripts, assets, and metadata to create an immersive and interactive gaming experience using NFT 2.0 technology.

## Contracts

We have developed several contracts specifically for "Age of Chronos": `ChronoCharacter`, `ChronoItem`, and `ChronoCatalog`. Additionally, we include a `MockChronoRegistry`.

1. `ChronoCharacter` is the primary entity in our game, featuring assets composed of multiple parts: head, body, and arms. Each character has slots for equipping items, enhancing gameplay.
2. `ChronoItem` represents the NFTs that can be equipped by the characters. Each item has unique attributes and can be equipped in different ways, adding depth to the game.
3. `ChronoCatalog` defines the fixed and variable parts used to compose characters and items. It's crucial for maintaining the integrity and variety in the game's universe.
4. `MockChronoRegistry` is a utility contract for adding your collection directly from the deploy script, essential for testing and development phases.

## Scripts

We've included various scripts for deploying and managing game assets:

1. `constants.ts` defines all deploy constants, including URIs for metadata, base URIs for assets, and identifiers for parts and equippable groups.
2. `getRegistry.ts` provides a method to get an instance of the Registry contract, used by the deploy script to add the collection to the platform.
3. `utils.ts` contains the logic for deploying your contracts, configuring the catalog, minting characters and items, and more.
4. `runDeploy.ts` uses methods from `utils.ts` to deploy contracts, set up the game environment, and mint initial game assets.

## Assets

Our game assets include:

1. `chronosCharacters` with full renders for backward compatibility and separate body parts for customization.
2. `chronosItems` featuring different versions for each item, enhancing gameplay variety.
3. `collection images` for both characters and items, providing a visual representation of the game's universe.

## Metadata

The metadata for "Age of Chronos" includes:

1. `catalog` metadata for each character and item, detailing their attributes and functions.
2. `character` and `item` metadata, providing detailed information about each game entity.
3. `collection` metadata, offering an overview of the game's universe and its elements.

## Tests

We provide a comprehensive test suite to ensure the functionality and integrity of the game's contracts and assets.

## Instructions

To set up and test the "Age of Chronos" environment:

1. Install dependencies using `yarn` or `npm install`.
2. Compile contracts: `yarn hardhat compile` or `npx run compile`.
3. Run tests: `npx test` or `npx run test`.
4. Run prettier: `npx prettier`
4. Configure your environment variables in `.env` based on `.env.example`.
5. Use `contracts/`, `tests/`, and `scripts/` directories to develop and extend the game.
6. Deploy on testnet: `npx hardhat run scripts/runDeploy.ts --network moonbaseAlpha`


## License

This project is licensed under GPL-3.0. Please credit "Age of Chronos" and SFY Labs when using our technology or referencing our work.


          /***********************************************/
          /**        Using software by RMRK.app         **/
          /**             contact@rmrk.app              **/
          /***********************************************/
