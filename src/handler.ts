import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const scrapeIMDBFilmReleases = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: 'Hello World'
  }
}