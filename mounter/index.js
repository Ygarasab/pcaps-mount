const writer = require('./writer')
const socket = require("./socket")

const defaultUri = 'ws://201.55.101.172:7000'  
let packetLength = 1424

/**
 * 
 * @param {Buffer} batch 
 */
const logBatchInfo = batch => {

    let nPackets = batch.length/packetLength
    console.log(nPackets +' packets received')
    console.log(batch.subarray(71, 75))
    console.log(batch.subarray((nPackets - 1) * packetLength + 71, (nPackets - 1) * packetLength + 75))

}

/**
 * 
 * @param {Buffer} batch 
 * @param {PcapWriter} pcapWriter 
 * @param {Boolean} verbose
 */
const writePacketBatch = (batch, pcapWriter, verbose) => {

    let nPackets = batch.length/packetLength
    if(verbose) logBatchInfo(batch)
    for (let i = 0; i < nPackets; i++) 
        pcapWriter.writePacket(batch.subarray(i * packetLength, (i+1) * packetLength))

}

module.exports = {

    /**
     * @param {String} sourceUri
     * @param {String} outputPath
     * @param {Number} captureTime
     * @param {Number} newLength
     * @param {Boolean} verbose
     */
    writePcap : (sourceUri, outputPath, captureTime, newLength, verbose) => {

        captureTime *= 1000
        packetLength = newLength

        if(verbose) console.log("Iniciando captura")

        return new Promise( resolve => {

            let timesUp = false
            const pcapWriter = writer.startNewPcap(outputPath || '')
            const currentSocket = socket.listenPackets(
                sourceUri || defaultUri, 
                /**
                 * @param {Buffer} packetBacth
                 */
                packetBatch => {if(packetBatch.length && !timesUp) writePacketBatch(packetBatch, pcapWriter, verbose)}
            )
    
            setTimeout( () => {
                timesUp = true
                currentSocket.close()
                pcapWriter.close()
                if(verbose) console.log("Captura concluída")
                resolve(true)
            }, captureTime)

        })

    }

}

