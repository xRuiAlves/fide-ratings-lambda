import { 
    getPlayerElo, 
    getPlayerHistory, 
    getPlayerRank, 
    getPlayerFullInfo, 
    getPlayerPersonalData 
} from "fide-ratings-scraper";

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
