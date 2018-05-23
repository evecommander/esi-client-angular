/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * response object
 */
export interface PutCharactersCharacterIdCalendarEventIdResponse {
    /**
     * response string
     */
    response: PutCharactersCharacterIdCalendarEventIdResponse.ResponseEnum;
}
export namespace PutCharactersCharacterIdCalendarEventIdResponse {
    export type ResponseEnum = 'accepted' | 'declined' | 'tentative';
    export const ResponseEnum = {
        Accepted: 'accepted' as ResponseEnum,
        Declined: 'declined' as ResponseEnum,
        Tentative: 'tentative' as ResponseEnum
    }
}
