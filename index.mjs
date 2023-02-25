import { 
    getPlayerElo, 
    getPlayerHistory, 
    getPlayerRank, 
    getPlayerFullInfo, 
    getPlayerPersonalData 
} from "fide-ratings-scraper";

const OPERATIONS = Object.freeze({
    getPlayerElo: "getPlayerElo", 
    getPlayerHistory: "getPlayerHistory", 
    getPlayerRank: "getPlayerRank", 
    getPlayerFullInfo: "getPlayerFullInfo", 
    getPlayerPersonalData: "getPlayerPersonalData"
});

const buildErrorResponse = (message) => buildResponse(400, message);

const buildSuccessMessage = (payload) => buildResponse(200, JSON.stringify(payload));

const buildResponse = (statusCode, payload) => ({
    statusCode,
    body: payload
});

export const handler = async(event) => {
    console.info(`Event body: ${event.body}`);
    
    const { operation, fideId } = JSON.parse(event.body);
    console.info(`Operation: ${operation}`);
    console.info(`Operation: ${fideId}`);

    if (!fideId || isNaN(fideId)) {
        console.error("Invalid fide ID");
        return buildErrorResponse("You must specify a valid 'fideId' number within the request's body."); 
    }

    switch (operation) {
        case OPERATIONS.getPlayerElo:
            console.info("Getting player elo");
            const elo = await getPlayerElo(fideId);
            console.info(`Player ${fideId} elo: ${elo}`);
            return buildSuccessMessage(elo);
        case OPERATIONS.getPlayerHistory:
            console.info("Getting player history");
            const history = await getPlayerHistory(fideId);
            console.info(`Player ${fideId} history: ${history}`);
            return buildSuccessMessage(history);
        case OPERATIONS.getPlayerRank:
            console.info("Getting player rank");
            const rank = await getPlayerRank(fideId);
            console.info(`Player ${fideId} rank: ${rank}`);
            return buildSuccessMessage(rank);
        case OPERATIONS.getPlayerFullInfo:
            console.info("Getting player full info");
            const fullInfo = await getPlayerFullInfo(fideId);
            console.info(`Player ${fideId} full info: ${fullInfo}`);
            return buildSuccessMessage(fullInfo);
        case OPERATIONS.getPlayerPersonalData:
            console.info("Getting player personal data");
            const personalData = await getPlayerPersonalData(fideId);
            console.info(`Player ${fideId} personal data: ${personalData}`);
            return buildSuccessMessage(personalData);
        default:
            console.error("Invalida operation");
            return buildErrorResponse(
                `You must specify a valid 'operation' within the request's body. Valid operations: [${Object.values(OPERATIONS).join(", ")}].`
            ); 

    }
};
