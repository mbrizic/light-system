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
			validate: { notEmpty: true },
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

			},
			seed: function(){
				seedFloorplanData();
			}
		}
	});

	function seedFloorplanData(){
		Floorplan.bulkCreate([
			{ name: "1st Floorplan", imageUrl: 'keep.jpg', imageWidth: 1000, imageHeight: 1003 },
		]);
	}

	return Floorplan;
};