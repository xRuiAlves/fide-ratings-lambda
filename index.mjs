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
    if (!OPERATIONS[operation]) {
        return buildErrorResponse(`You must specify a valid 'operation' within the request's body. Valid operations: [${Object.values(OPERATIONS).join(", ")}].`); 
    }

    if (!fideId || isNaN(fideId)) {
        return buildErrorResponse("You must specify a valid 'fideId' number within the request's body."); 
    }
    return buildSuccessMessage("Hello from Lambda");
};
