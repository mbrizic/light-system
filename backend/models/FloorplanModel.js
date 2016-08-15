module.exports = function(db, Sequelize) {

	var Floorplan = db.define('Floorplan', {
		id: { 
			type: Sequelize.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
			required: true,
			unique: true,
		},
		description: {
			type: Sequelize.STRING,
		},
		imageUrl: {
			type: Sequelize.STRING,
			required: true,
		},
		imageWidth: {
			type: Sequelize.DOUBLE,
		},
		imageHeight: {
			type: Sequelize.DOUBLE,
		}
	},
	{
		classMethods: {
			associate: function(models) {
				Floorplan.hasMany(models.Light);
			},
			seed: function(){
				seedFloorplanData();
			}
		}
	});

	function seedFloorplanData(){
		Floorplan.bulkCreate([
			{ name: "1st Floorplan", imageUrl: '', imageWidth: 1000, imageHeight: 1003 },
			{ name: "2nd floorplan", imageUrl: '', imageWidth: 1500, imageHeight: 1500 },
		]);
	}

	return Floorplan;
};