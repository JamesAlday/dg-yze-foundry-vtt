// config: true (visible)
// scope: world (gm), client (player)

/**
 * Registers system settings.
 */
export function registerSystemSettings() {
  // Tracks the system version.
  game.settings.register('dgyze', 'systemMigrationVersion', {
    config: false,
    scope: 'world',
    name: 'System Migration Version',
    type: String,
    default: '',
  });
  game.settings.register('dgyze', 'messages', {
    name: 'Displayed Messages',
    hint: 'Used to track which messages have been displayed',
    scope: 'world',
    config: false,
    type: Array,
    default: [],
  });

  game.settings.register('dgyze', 'hideCapacitiesButtons', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.hideCapacitiesButtons.name',
    hint: 'SETTINGS.hideCapacitiesButtons.label',
    type: Boolean,
    default: false,
  });

  game.settings.register('dgyze', 'hideWeaponProps', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.hideWeaponProps.name',
    hint: 'SETTINGS.hideWeaponProps.label',
    type: Boolean,
    default: false,
  });

  game.settings.register('dgyze', 'trackPcAmmo', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.trackPcAmmo.name',
    hint: 'SETTINGS.trackPcAmmo.label',
    type: Boolean,
    default: true,
  });

  game.settings.register('dgyze', 'trackNpcAmmo', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.trackNpcAmmo.name',
    hint: 'SETTINGS.trackNpcAmmo.label',
    type: Boolean,
    default: false,
  });

  game.settings.register('dgyze', 'trackVehicleAmmo', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.trackVehicleAmmo.name',
    hint: 'SETTINGS.trackVehicleAmmo.label',
    type: Boolean,
    default: true,
  });

  game.settings.register('dgyze', 'showTaskCheckOptions', {
    config: true,
    scope: 'client',
    name: 'SETTINGS.showTaskCheckOptions.name',
    hint: 'SETTINGS.showTaskCheckOptions.label',
    type: Boolean,
    default: true,
  });

  game.settings.register('dgyze', 'closeRollTooltipDelay', {
    config: true,
    scope: 'client',
    name: 'SETTINGS.closeRollTooltipDelay.name',
    hint: 'SETTINGS.closeRollTooltipDelay.label',
    type: Number,
    default: 60,
  });

  game.settings.register('dgyze', 'defaultCharTokenSize', {
    config: true,
    scope: 'world',
    name: 'SETTINGS.defaultCharTokenSize.name',
    hint: 'SETTINGS.defaultCharTokenSize.label',
    type: Number,
    default: 1,
  });

  game.settings.register('dgyze', 'travelRollAllowPush', {
    config: false,
    scope: 'world',
    name: 'FLPS.SETTINGS.ALLOW_PUSH',
    hint: 'FLPS.SETTINGS.ALLOW_PUSH_HINT',
    type: Boolean,
    default: false,
  });
}
