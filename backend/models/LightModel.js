module.exports = function(db, Sequelize) {

	var Light = db.define('Light', {
		id: { 
			type: Sequelize.INTEGER, 
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			required: true,
			unique: true,
			validate: { notEmpty: true },
		},
		description: {
			type: Sequelize.STRING,
		},
		x: {
			type: Sequelize.DOUBLE,
			defaultValue: 0,
		},
		y: {
			type: Sequelize.DOUBLE,
			defaultValue: 0,
		},
		isDiscrete: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
		intensity: {
			type: Sequelize.DOUBLE,
			defaultValue: 0,
		},
		startDegrees: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
			validate: { min: 0, max: 360 },
		},
		endDegrees: {
			type: Sequelize.INTEGER,
			defaultValue: 360,
			validate: { min: 0, max: 360 },
		},
		color: {
			type: Sequelize.STRING,
			defaultValue: '#FFFFFF',
		},
		radius: {
			type: Sequelize.INTEGER,
			defaultValue: 100,
		},
		powerCost: {
			type: Sequelize.INTEGER,
		},
	},
	{
		classMethods: {
			associate: function(models) {
				Light.belongsTo(models.Floorplan, { foreignKey: 'floorplanId' });
			},
			seed: function () {
				seedLightData();
			}
		}
	});

	function seedLightData(){
		Light.bulkCreate([
			{ name: "First  Light", x: 100, y: 200, floorplanId: 1, isDiscrete: true },
			{ name: "Second Light", x: 150, y: 250, floorplanId: 1, isDiscrete: false },
			{ name: "Third  Light", x: 200, y: 100, floorplanId: 1, isDiscrete: true },
			{ name: "Fourth Light", x: 200, y: 100, floorplanId: 1, isDiscrete: false },
		]);
	}

	return Light;
};