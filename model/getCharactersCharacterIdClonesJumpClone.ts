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
 * jump_clone object
 */
export interface GetCharactersCharacterIdClonesJumpClone {
    /**
     * jump_clone_id integer
     */
    jumpCloneId: number;
    /**
     * name string
     */
    name?: string;
    /**
     * location_id integer
     */
    locationId: number;
    /**
     * location_type string
     */
    locationType: GetCharactersCharacterIdClonesJumpClone.LocationTypeEnum;
    /**
     * implants array
     */
    implants: Array<number>;
}
export namespace GetCharactersCharacterIdClonesJumpClone {
    export type LocationTypeEnum = 'station' | 'structure';
    export const LocationTypeEnum = {
        Station: 'station' as LocationTypeEnum,
        Structure: 'structure' as LocationTypeEnum
    }
}
