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
 * skill object
 */
export interface GetCharactersCharacterIdSkillsSkill {
    /**
     * skill_id integer
     */
    skillId: number;
    /**
     * skillpoints_in_skill integer
     */
    skillpointsInSkill: number;
    /**
     * trained_skill_level integer
     */
    trainedSkillLevel: number;
    /**
     * active_skill_level integer
     */
    activeSkillLevel: number;
}
