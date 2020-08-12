# pcaps-mount

A node.js library for catching Buffers through a socket, and writing them down on a pcap.

## Description

This library was written with the only goal of facilitating packet gathering for the Teccon II project, therefore it does some pretty specific stuff.

So, what it does, it listens to a WebSocket server, gets a Buffer out of it, chops the buffer into packets with a specific length (default 1424) and writes it into a .pcap for a certain amount of time.

As said, quite specific

## Instalation

Initialy, this library was thought to be used as a CLI. So it's likely for you to want to install it like that

`npm i -g pcaps-mount`

That way, you are able to use it as CLI.

But, of course, if you want to use it as dependency, you can go with

`npm i pcaps-mount`

## Using the CLI    

So, there are two usage for the CLI. A method that just captures a single pcap, and another that just keeps listening to the WebSocket and making new pcaps. Both will be explained below.

- `mount-pcap`

    The `mount-pcap` command has the following usage specs :
    ```
    Usage : -u <uri> -t <capture-time> -o <output-path>

    Opções:
    --help               Shows help                                                                   [boolean]
    --version            Shows version                                                                [boolean]
    -u, --uri            Web Socket server to listen to                                     [string] [required]
    -t, --capture-time   Capture time, in seconds                                           [number] [required]
    -o, --output-path    Output path for the pcap file                                      [string] [required]
    -l, --packet-length  Packet length for each individual packet within the Buffer    [number] [default: 1424]
    -v, --verbose        Activates verbose                                           [boolean] [default: false]
    ```

    So, say you want to capture the packets from a local WebSocket server for 30 seconds and save it in the working directory, you would run something like this :

    `pcap-mount -u ws://localhost:3000 -t 5 -o ./`

- `listen-pcaps`

    In a similar way, the listen-pcaps usage goes like this:

    ```
    Usage : -u <uri> -t <capture-time> -o <output-path>

    Opções:
    --help               Shows help                                                                   [boolean]
    --version            Shows version                                                                [boolean]
    -u, --uri            Web Socket server to listen to                                     [string] [required]
    -t, --capture-time    Capture time for each pcap, in minutes                            [number] [required]
    -o, --output-path    Output path for the pcap file                                      [string] [required]
    -l, --packet-length  Packet length for each individual packet within the Buffer    [number] [default: 1424]
    -v, --verbose        Activates verbose                                           [boolean] [default: false]
    ```

    So, if you want to continualy hear the arriving buffers, writing one .pcap each 2 minutes, and saving them in the working directory, you would run something like this : 

    `listen-pcaps -u ws://localhost:3000 -t 2 -o ./`
