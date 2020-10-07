const WebSocket = require("ws")

module.exports = {

    /**
     * @param {String} uri
     * @param { (packet : Buffer ) => {}} callback
     * @returns {  WebSocket }
     */
    listenPackets : (uri, callback) => {

        const ws = new WebSocket(uri)

            .on('open', () => console.log('Connected to teccon'))
            .on('message', callback)

        return ws


    }

}