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
 * allowed object
 */
export interface GetCharactersCharacterIdChatChannelsAllowed {
    /**
     * ID of an allowed channel member
     */
    accessorId: number;
    /**
     * accessor_type string
     */
    accessorType: GetCharactersCharacterIdChatChannelsAllowed.AccessorTypeEnum;
}
export namespace GetCharactersCharacterIdChatChannelsAllowed {
    export type AccessorTypeEnum = 'character' | 'corporation' | 'alliance';
    export const AccessorTypeEnum = {
        Character: 'character' as AccessorTypeEnum,
        Corporation: 'corporation' as AccessorTypeEnum,
        Alliance: 'alliance' as AccessorTypeEnum
    }
}
