module.exports = function(db, Sequelize) {

	var Scene = db.define('Scene', {
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
	},
	{
		classMethods: {
			associate: function(models) {
				Scene.belongsTo(models.Floorplan, { 
					foreignKey: { name: 'floorplanId', allowNull: false }
				});

				Scene.belongsToMany(models.Light, {
					foreignKey: 'lightId',
					through: models.LightScene,
					constraints: false,
				});
			},
			seed: function () {
				seedSceneData();
			}
		}
	});

	function seedSceneData(){
		Scene.bulkCreate([
			{ name: "First  Scene", description: "blabla", floorplanId: 1 },
			{ name: "Second Scene", description: "blabla", floorplanId: 1 },
		]);
	}

	return Scene;
};