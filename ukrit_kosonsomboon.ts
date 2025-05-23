// Return minimum number of turns required for reaching block 200.
function quickestPath({
    portals
}: {
    portals: { location: number; destination: number }[];
}): number {
    // One turn can move only 1-11 steps
    // The player can move to the next location or use a portal
    var turn = 0;
    var currentLocation = 1;
    var maxSteps = 11;
    const destination = 200;
    while (currentLocation < destination) {
        turn++;
        console.log('================================================================================');
        console.log('turn :', turn, 'currentLocation :', currentLocation);
        var maxDestination = currentLocation + maxSteps;
        // Move or Take Portal
        currentLocation = findPortalWithMaxDestination(currentLocation, maxDestination, portals);
        console.log('================================================================================');
    }
    return turn;
}

function isPortal(location: number, portals: { location: number; destination: number }[]) {
    return portals.some((portal) => portal.location === location);
}

function move(location: number, portals: { location: number; destination: number }[]) {
    if (isPortal(location, portals)) {
        const portal = portals.find((portal) => portal.location === location);
        console.log('found portal -> from :', location, 'to :', portal?.destination);
        return portal ? portal.destination : location;
    }
    return location + 1; // Move to the next location
}

function findPortalWithMaxDestination(start: number, maxDest: number, portals: { location: number; destination: number }[]) {
    let maxDestination = maxDest;
    for (let i = start; i < maxDest; i++) {
        const nextLocation = move(i, portals);
        console.log('calculating move from :', i, 'to :', nextLocation);
        if (nextLocation > maxDestination) {
            console.log('found new maxDestination:', nextLocation);
            maxDestination = nextLocation;
        }
    }
    console.log('move from :', start, ' to :', maxDestination);
    return maxDestination;
}

const portals: { location: number; destination: number }[] = [
    { location: 55, destination: 38 },
    { location: 14, destination: 35 },
    { location: 91, destination: 48 },
    { location: 30, destination: 8 },
    { location: 31, destination: 70 },
    { location: 63, destination: 83 },
    { location: 3, destination: 39 },
    { location: 47, destination: 86 },
    { location: 71, destination: 93 },
    { location: 21, destination: 4 },
    { location: 44, destination: 65 },
    { location: 96, destination: 66 },
    { location: 79, destination: 42 },
    { location: 87, destination: 54 },
    { location: 90, destination: 119 },
    { location: 120, destination: 149 },
    { location: 150, destination: 179 },
    { location: 180, destination: 200 },
];
// Result should be 1 -> 3 take portal to 39 -> 47 take portal to 86 -> 90 take portal to 119 -> 120 take portal to 149 -> 150 take portal to 179 -> 180 take portal to 200
// 1 -> 3 -> 47 -> 90 -> 120 -> 150 -> 180 (6 turns)

console.log(quickestPath({ portals }));