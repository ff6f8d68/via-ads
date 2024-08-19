// Netlify Function: addChannel.js
const channels = [];

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const { channelName } = data;

    if (channelName) {
        channels.push(channelName);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Channel added', channels })
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Channel name required' })
        };
    }
};
