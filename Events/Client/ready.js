module.exports = {
    name : "ready",
    execute(client) {
        console.log('The clinet is now ready💦');
        client.user.setActivity('Serendib Roleplay', {type: 'WATCHING'});
    }
};