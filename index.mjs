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
};
