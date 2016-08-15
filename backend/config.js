var connectionString = getOrDefault('DATABASE_URL', 'postgres://postgres:postgres@localhost:5432/lightSystem');

function getOrDefault(key, defaultValue){
	var setting = process.env[key];

	var settingExists = setting && setting !== '';

	return settingExists ? setting : defaultValue;
}

module.exports = {
	connectionString,
};
	