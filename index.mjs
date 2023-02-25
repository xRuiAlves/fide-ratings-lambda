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

const buildErrorResponse = (message) => ({
    statusCode: 400,
    body: message,
});

const buildSuccessMessage = (payload) => ({
    statusCode: 200,
    body: JSON.stringify(payload)
});

export const handler = async({operation, fideId}) => {
    if (!fideId || isNaN(fideId)) {
        return buildErrorResponse("You must specify a valid 'fideId' number within the request's body."); 
    }

    switch (operation) {
        case OPERATIONS.getPlayerElo:
            return buildSuccessMessage(await getPlayerElo(fideId));
        case OPERATIONS.getPlayerHistory:
            return buildSuccessMessage(await getPlayerHistory(fideId));
        case OPERATIONS.getPlayerRank:
            return buildSuccessMessage(await getPlayerRank(fideId));
        case OPERATIONS.getPlayerFullInfo:
                return buildSuccessMessage(await getPlayerFullInfo(fideId));
        case OPERATIONS.getPlayerPersonalData:
            return buildSuccessMessage(await getPlayerPersonalData(fideId));
        default:
            return buildErrorResponse(
                `You must specify a valid 'operation' within the request's body. Valid operations: [${Object.values(OPERATIONS).join(", ")}].`
            ); 

    }
};
