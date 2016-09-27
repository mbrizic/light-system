module.exports = function(db, Sequelize) {

	var LightScene = db.define('LightScene', {
		id: { 
			type: Sequelize.INTEGER, 
			primaryKey: true,
			autoIncrement: true,
		},
		intensity: {
			type: Sequelize.DOUBLE,
			defaultValue: 0,
		},
	},
	{
		classMethods: {
			associate: function(models) {

			},
			seed: function () {
				//seedLightSceneData();
			}
		}
	});

	function seedLightSceneData(){
		LightScene.bulkCreate([
			{ sceneId: 1, lightId: 1 },
			{ sceneId: 1, lightId: 3 },
			{ sceneId: 2, lightId: 1 },
			{ sceneId: 2, lightId: 2 },
			{ sceneId: 2, lightId: 4 },
		]);
	}

	return LightScene;
};