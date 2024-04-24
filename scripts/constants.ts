const BASE_IPFS_URI = 'ipfs://QmbaB4anHLUCFDQQ1L4PRyhYTFyxtzWp2HMpR5yE2qEtVh';  //metadata ipfs

// Collection metadata
const SQUAD_METADATA_ARIA = BASE_IPFS_URI + '/timeSquad/collection_metadata_squad_aria.json';
const SQUAD_METADATA_LUNA = BASE_IPFS_URI + '/timeSquad/collection_metadata_squad_luna.json';
const SQUAD_METADATA_RYKER = BASE_IPFS_URI + '/timeSquad/collection_metadata_squad_ryker.json';
const SQUAD_METADATA_THADDEUS = BASE_IPFS_URI + '/timeSquad/collection_metadata_squad_thaddeus.json';

const SQUAD_ITEM_METADATA_ARIA_ARMOR = BASE_IPFS_URI + '/items/collection_metadata/aria/armor.json';
const SQUAD_ITEM_METADATA_ARIA_CAP = BASE_IPFS_URI + '/items/collection_metadata/aria/cap.json';
const SQUAD_ITEM_METADATA_ARIA_LEFT_HAND = BASE_IPFS_URI + '/items/collection_metadata/aria/left_hand.json';
const SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND = BASE_IPFS_URI + '/items/collection_metadata/aria/right_hand.json';

const SQUAD_ITEM_METADATA_LUNA_ARMOR = BASE_IPFS_URI + '/items/collection_metadata/luna/armor.json';
const SQUAD_ITEM_METADATA_LUNA_CAP = BASE_IPFS_URI + '/items/collection_metadata/luna/cap.json';
const SQUAD_ITEM_METADATA_LUNA_LEFT_HAND = BASE_IPFS_URI + '/items/collection_metadata/luna/left_hand.json';
const SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND = BASE_IPFS_URI + '/items/collection_metadata/luna/right_hand.json';

const SQUAD_ITEM_METADATA_RYKER_ARMOR = BASE_IPFS_URI + '/items/collection_metadata/ryker/armor.json';
const SQUAD_ITEM_METADATA_RYKER_CAP = BASE_IPFS_URI + '/items/collection_metadata/ryker/cap.json';
const SQUAD_ITEM_METADATA_RYKER_LEFT_HAND = BASE_IPFS_URI + '/items/collection_metadata/ryker/left_hand.json';
const SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND = BASE_IPFS_URI + '/items/collection_metadata/ryker/right_hand.json';

const SQUAD_ITEM_METADATA_THADDEUS_ARMOR = BASE_IPFS_URI + '/items/collection_metadata/thaddeus/armor.json';
const SQUAD_ITEM_METADATA_THADDEUS_CAP = BASE_IPFS_URI + '/items/collection_metadata/thaddeus/cap.json';
const SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND = BASE_IPFS_URI + '/items/collection_metadata/thaddeus/left_hand.json';
const SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND = BASE_IPFS_URI + '/items/collection_metadata/thaddeus/right_hand.json';


// Catalog metadata
const SQUAD_CATALOG_RYKER_METADATA = BASE_IPFS_URI + '/catalog/catalogRyker.json';
const SQUAD_CATALOG_LUNA_METADATA = BASE_IPFS_URI + '/catalog/catalogluna.json';
const SQUAD_CATALOG_ARIA_METADATA = BASE_IPFS_URI + '/catalog/catalogAria.json';
const SQUAD_CATALOG_THADDEUS_METADATA = BASE_IPFS_URI + '/catalog/catalogThaddeus.json';

const SQUAD_ITEM_LEFT_SLOT_METADATA = BASE_IPFS_URI + '/catalog/slots/left_hand.json';  //{ "name": "Left Hand" }
const SQUAD_ITEM_RIGHT_SLOT_METADATA = BASE_IPFS_URI + '/catalog/slots/right_hand.json';
const SQUAD_ITEM_CAP_SLOT_METADATA = BASE_IPFS_URI + '/catalog/slots/cap.json';
const SQUAD_ITEM_ARMOR_SLOT_METADATA = BASE_IPFS_URI + '/catalog/slots/armor.json';

// Image data
const SQUAD_ITEM_BASE_METADATA_URI = BASE_IPFS_URI + '/items/';


// FIXED PARTS non presenti

// SLOT PARTS, sono uguali per ogni catalog
const SQUAD_LEFT_HAND_SLOT_PART_ID = 1001;
const SQUAD_RIGHT_HAND_SLOT_PART_ID = 1002;
const SQUAD_CAP_SLOT_PART_ID = 1003;
const SQUAD_ARMOR_SLOT_PART_ID = 1004;

// PART TYPES (Defined by standard)
const PART_TYPE_SLOT = 1;
const PART_TYPE_FIXED = 2;

// Z INDEXES per le immagini SVG (sia fixed che slot part), avendo lo stesso valore allora hanno lo stesso livello
const Z_INDEX_LEFT_HAND_ITEMS = 6;
const Z_INDEX_RIGHT_HAND_ITEMS = 8;
const Z_INDEX_CAP_ITEMS = 4;
const Z_INDEX_ARMOR_ITEMS = 2;


// Equippable groups  todo forse qui il doppio bug?
const EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT = 1; //tutti saranno equipaggiabili
const EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND = SQUAD_LEFT_HAND_SLOT_PART_ID;
const EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND = SQUAD_RIGHT_HAND_SLOT_PART_ID;
const EQUIPPABLE_GROUP_FOR_ITEMS_CAP = SQUAD_CAP_SLOT_PART_ID;
const EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR = SQUAD_ARMOR_SLOT_PART_ID;



export {
  BASE_IPFS_URI,
  SQUAD_METADATA_ARIA,
  SQUAD_METADATA_LUNA,
  SQUAD_METADATA_RYKER,
  SQUAD_METADATA_THADDEUS,
  SQUAD_ITEM_METADATA_ARIA_ARMOR,
  SQUAD_ITEM_METADATA_ARIA_CAP,
  SQUAD_ITEM_METADATA_ARIA_LEFT_HAND,
  SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND,
  SQUAD_ITEM_METADATA_LUNA_ARMOR,
  SQUAD_ITEM_METADATA_LUNA_CAP,
  SQUAD_ITEM_METADATA_LUNA_LEFT_HAND,
  SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND,
  SQUAD_ITEM_METADATA_RYKER_ARMOR,
  SQUAD_ITEM_METADATA_RYKER_CAP,
  SQUAD_ITEM_METADATA_RYKER_LEFT_HAND,
  SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND,
  SQUAD_ITEM_METADATA_THADDEUS_ARMOR,
  SQUAD_ITEM_METADATA_THADDEUS_CAP,
  SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND,
  SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND,
  SQUAD_CATALOG_RYKER_METADATA,
  SQUAD_CATALOG_LUNA_METADATA,
  SQUAD_CATALOG_ARIA_METADATA,
  SQUAD_CATALOG_THADDEUS_METADATA,
  SQUAD_ITEM_LEFT_SLOT_METADATA,
  SQUAD_ITEM_RIGHT_SLOT_METADATA,
  SQUAD_ITEM_CAP_SLOT_METADATA,
  SQUAD_ITEM_ARMOR_SLOT_METADATA,
  SQUAD_ITEM_BASE_METADATA_URI,
  SQUAD_LEFT_HAND_SLOT_PART_ID,
  SQUAD_RIGHT_HAND_SLOT_PART_ID,
  SQUAD_CAP_SLOT_PART_ID,
  SQUAD_ARMOR_SLOT_PART_ID,
  PART_TYPE_SLOT,
  PART_TYPE_FIXED,

  Z_INDEX_LEFT_HAND_ITEMS,
  Z_INDEX_RIGHT_HAND_ITEMS,
  Z_INDEX_CAP_ITEMS,
  Z_INDEX_ARMOR_ITEMS,
  EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT,
  EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
  EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
  EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
  EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR
};


