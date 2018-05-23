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
 * Summary of victory points gained for the given faction
 */
export interface GetFwStatsVictoryPoints {
    /**
     * Yesterday's victory points gained
     */
    yesterday: number;
    /**
     * Last week's victory points gained
     */
    lastWeek: number;
    /**
     * Total victory points gained since faction warfare began
     */
    total: number;
}
