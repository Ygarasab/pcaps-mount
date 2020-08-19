const PcapWriter = require('node-pcap-writer')

module.exports = {

    /**
     * @param {String} outputPath
     * @param {String} pcapName
     * @returns {PcapWriter}
     */
    startNewPcap : (outputPath, pcapName) => {
        const t = new Date()
        const dateSection = t.getTime()
        const pcapName = pcapName || `tecconPcap-${dateSection}.pcap`
        const pcapPath = ( outputPath || __dirname + "\\generated-pcaps\\" ) + pcapName
        const writer = new PcapWriter(pcapPath, 1424, 105)
        return writer

    }

}