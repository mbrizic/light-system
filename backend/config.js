var connectionString = getOrDefault('DATABASE_URL', 'postgres://postgres:postgres@localhost:5432/lightSystem');
var uploadFolder = getOrDefault('UPLOAD_FOLDER', 'uploads');
var imagesFolderUrl = getOrDefault('IMAGES_FOLDER_URL', '/image');

function getOrDefault(key, defaultValue){
	var setting = process.env[key];

	var settingExists = setting && setting !== '';

	return settingExists ? setting : defaultValue;
}

module.exports = {
	connectionString,
	uploadFolder,
	imagesFolderUrl,
};
	