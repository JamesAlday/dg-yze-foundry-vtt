/**
 * The DGYZE Configuration.
 * @constant
 */
export const DGYZE = {};

DGYZE.ASCII = `-.-- . .- .-.    --.. . .-. ---    . -. --. .. -. . 

    ┳┓┏┓┓ ┏┳┓┏┓  ┏┓┳┓┏┓┏┓┳┓               ▲
    ┃┃┣ ┃  ┃ ┣┫  ┃┓┣┫┣ ┣ ┃┃      
    ┻┛┗┛┗┛ ┻ ┛┗  ┗┛┛┗┗┛┗┛┛┗            ◢     ◣       

-.-- . .- .-.    --.. . .-. ---    . -. --. .. -. . 
`;
DGYZE.systemMacroFolder = 'Delta Green Roll Macros';

DGYZE.attributes = {
  str: 'DGYZE.AttributeNames.str',
  agl: 'DGYZE.AttributeNames.agl',
  int: 'DGYZE.AttributeNames.int',
  emp: 'DGYZE.AttributeNames.emp',
};

DGYZE.skills = {
  none: 'DGYZE.SkillNames.none',
  heavyWeapons: 'DGYZE.SkillNames.heavyWeapons',
  closeCombat: 'DGYZE.SkillNames.closeCombat',
  stamina: 'DGYZE.SkillNames.stamina',
  driving: 'DGYZE.SkillNames.driving',
  mobility: 'DGYZE.SkillNames.mobility',
  rangedCombat: 'DGYZE.SkillNames.rangedCombat',
  recon: 'DGYZE.SkillNames.recon',
  survival: 'DGYZE.SkillNames.survival',
  tech: 'DGYZE.SkillNames.tech',
  command: 'DGYZE.SkillNames.command',
  persuasion: 'DGYZE.SkillNames.persuasion',
  medicalAid: 'DGYZE.SkillNames.medicalAid',
};

DGYZE.skillsMap = {
  none: null,
  heavyWeapons: 'str',
  closeCombat: 'str',
  stamina: 'str',
  driving: 'agl',
  mobility: 'agl',
  rangedCombat: 'agl',
  recon: 'int',
  survival: 'int',
  tech: 'int',
  command: 'emp',
  persuasion: 'emp',
  medicalAid: 'emp',
};

DGYZE.dieSizes = [-1, 12, 10, 8, 6, 0];
DGYZE.dieScores = ['–', 'A', 'B', 'C', 'D', 'F'];
DGYZE.dieSizesMap = new Map(DGYZE.dieScores.map((x, i) => [x, DGYZE.dieSizes[i]]));

DGYZE.actionSkillsMap = {
  'travel-forced-march': 'stamina',
  'travel-march-in-darkness': 'survival',
  'travel-drive': 'driving',
  'travel-keep-watch': 'recon',
  'travel-find-scrap': 'survival',
  'travel-find-food': 'survival',
  'travel-find-prey': 'survival',
  'travel-recon-prey': 'recon',
  'travel-kill-prey': 'rangedCombat',
  'travel-catch-fish': 'survival',
  'travel-make-camp': 'survival',
  'travel-hide-camp': 'recon',
  'travel-cook-food': 'survival',
};

DGYZE.physicalItems = ['weapon', 'armor', 'grenade', 'ammunition', 'gear'];

DGYZE.vehicle = {
  extraPassengerEncumbrance: 50,
  emptySeatEncumbrance: 25,
  crewPositionFlags: ['DRIVER', 'GUNNER', 'COMMANDER', 'PASSENGER'],
  crewPositionFlagsLocalized: {
    DRIVER: 'DGYZE.VehicleSheet.CrewPositions.Driver',
    GUNNER: 'DGYZE.VehicleSheet.CrewPositions.Gunner',
    COMMANDER: 'DGYZE.VehicleSheet.CrewPositions.Commander',
    PASSENGER: 'DGYZE.VehicleSheet.CrewPositions.Passenger',
  },
  movementTypes: {
    W: 'DGYZE.VehicleSheet.Wheels',
    T: 'DGYZE.VehicleSheet.Tracks',
    H: 'DGYZE.VehicleSheet.Hovercraft',
    A: 'DGYZE.VehicleSheet.Flying',
    N: 'DGYZE.VehicleSheet.Naval',
  },
  fuelTypes: {
    G: 'DGYZE.VehicleSheet.Gasoline',
    D: 'DGYZE.VehicleSheet.Diesel',
    A: 'DGYZE.VehicleSheet.Alcohol',
    N: 'DGYZE.VehicleSheet.Nuclear',
  },
  components: [
    'FUEL',
    'ENGINE',
    'SUSPENSION',
    'AMMUNITION',
    'CARGO',
    'DRIVER',
    'PASSENGER',
    'GUNNER',
    'COMMANDER',
    'RADIO',
    'TRACK_WHEEL',
    'WEAPON',
    'FIRE_CONTROL_SYSTEM',
    'ANTENNA',
    'EXTERNAL_STORES',
    'EXPOSED_PASSENGER',
    'RICOCHET',
  ],
  componentDamage: {
    penetration: [
      'FUEL',
      'ENGINE',
      'SUSPENSION',
      'AMMUNITION',
      'CARGO',
      'DRIVER',
      'PASSENGER',
      'GUNNER',
      'COMMANDER',
      'RADIO',
    ],
    glancingBlow: [
      'TRACK_WHEEL',
      'WEAPON',
      'FIRE_CONTROL_SYSTEM',
      'ANTENNA',
      'EXTERNAL_STORES',
      'EXPOSED_PASSENGER',
      'EXPOSED_PASSENGER',
      'RICOCHET',
      'RICOCHET',
    ],
  },
};

DGYZE.unit = {
  unitAffiliations: {
    friendly: 'DGYZE.UnitAffiliationNames.friendly',
    hostile: 'DGYZE.UnitAffiliationNames.hostile',
    neutral: 'DGYZE.UnitAffiliationNames.neutral',
    unknown: 'DGYZE.UnitAffiliationNames.unknown',
  },
  unitSizes: {
    army: 'DGYZE.UnitSizeNames.army',
    corps: 'DGYZE.UnitSizeNames.corps',
    division: 'DGYZE.UnitSizeNames.division',
    Brigade: 'DGYZE.UnitSizeNames.Brigade',
    regiment: 'DGYZE.UnitSizeNames.regiment',
    battalion: 'DGYZE.UnitSizeNames.battalion',
    company: 'DGYZE.UnitSizeNames.company',
    staffel: 'DGYZE.UnitSizeNames.staffel',
    platoon: 'DGYZE.UnitSizeNames.platoon',
    section: 'DGYZE.UnitSizeNames.section',
    squad: 'DGYZE.UnitSizeNames.squad',
    fireteam: 'DGYZE.UnitSizeNames.fireteam',
  },
  unitModifiers: {
    airborne: 'DGYZE.UnitModifierNames.airborne',
    parachute: 'DGYZE.UnitModifierNames.parachute',
    airmobile: 'DGYZE.UnitModifierNames.airmobile',
    airmobileOrganicLift: 'DGYZE.UnitModifierNames.airmobileOrganicLift',
    amphibious: 'DGYZE.UnitModifierNames.amphibious',
    motorized: 'DGYZE.UnitModifierNames.motorized',
    moutain: 'DGYZE.UnitModifierNames.moutain',
    cannon: 'DGYZE.UnitModifierNames.cannon',
    wheeled: 'DGYZE.UnitModifierNameswheeled.',
  },
};

DGYZE.hitLocs = ['legs', 'torso', 'torso', 'torso', 'arms', 'head'];

DGYZE.hitLocations = {
  none: '',
  head: 'DGYZE.ArmorLocationNames.head',
  arms: 'DGYZE.ArmorLocationNames.arms',
  torso: 'DGYZE.ArmorLocationNames.torso',
  legs: 'DGYZE.ArmorLocationNames.legs',
};

DGYZE.injuryCategories = {
  none: '',
  physical: 'DGYZE.InjuryCategoryNames.physical',
  mental: 'DGYZE.InjuryCategoryNames.mental',
};

DGYZE.radiationVirulence = 4;

DGYZE.ranges = [
  'DGYZE.Ranges.close',
  'DGYZE.Ranges.short',
  'DGYZE.Ranges.medium',
  'DGYZE.Ranges.long',
  'DGYZE.Ranges.extreme',
];

DGYZE.rollModes = {
  roll: 'CHAT.RollPublic',
  gmroll: 'CHAT.RollPrivate',
  blindroll: 'CHAT.RollBlind',
  selfroll: 'CHAT.RollSelf',
};

// DGYZE.unarmedData = {
//   attribute: 'str',
//   skill: 'closeCombat',
//   damage: 1,
//   crit: 4,
//   blast: '–',
//   armorModifier: 3,
//   range: 0,
//   weight: 0,
//   price: 0,
//   modifiers: { attributes: {}, skills: {} },
//   rof: 0,
//   mag: {},
//   props: {},
// };

/* ------------------------------------------- */
/*  Icons                                      */
/* ------------------------------------------- */

DGYZE.Icons = {
  boxes: {
    empty: '<i class="far fa-square"></i>',
    full: '<i class="fas fa-square"></i>',
  },
  buttons: {
    edit: '<i class="fas fa-edit"></i>',
    delete: '<i class="fas fa-trash"></i>',
    remove: '<i class="fas fa-times"></i>',
    plus: '<i class="fas fa-plus"></i>',
    minus: '<i class="fas fa-minus"></i>',
    equip: '<i class="fas fa-star"></i>',
    unequip: '<i class="far fa-star"></i>',
    stash: '<i class="fas fa-shopping-bag"></i>',
    unmount: '<i class="fas fa-thumbtack"></i>',
    mount: '<i class="fas fa-wrench"></i>',
    primaryWeapon: '<i class="fas fa-angle-up"></i>',
    secondaryWeapon: '<i class="fas fa-angle-double-up"></i>',
    attack: '<i class="fas fa-crosshairs"></i>',
    reload: '<i class="fas fa-sync-alt"></i>',
    lethal: '<i class="fas fa-skull"></i>',
    mental: '<i class="fas fa-brain"></i>',
    chat: '<i class="far fa-comment-dots"></i>',
  },
  armorLocationIcons: {
    head: '<i class="fas fa-hard-hat"></i>',
    arms: '<i class="fas fa-hand-paper"></i>',
    torso: '<i class="fas fa-tshirt"></i>',
    legs: '<i class="fas fa-socks"></i>',
  },
};

DGYZE.expenses = {
  categoriesColors: {
    I: 'incidental',
    S: 'standard', 
    U: 'unusual',
    M: 'major',
    E: 'extreme',
  },
  categoriesLocalised: {
    I: 'DGYZE.ExpenseCategoryNames.Incidental',
    S: 'DGYZE.ExpenseCategoryNames.Standard',
    U: 'DGYZE.ExpenseCategoryNames.Unusual',
    M: 'DGYZE.ExpenseCategoryNames.Major',
    E: 'DGYZE.ExpenseCategoryNames.Extreme'
  }
}