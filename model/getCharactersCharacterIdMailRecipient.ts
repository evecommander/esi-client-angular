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
 * recipient object
 */
export interface GetCharactersCharacterIdMailRecipient {
    /**
     * recipient_type string
     */
    recipientType: GetCharactersCharacterIdMailRecipient.RecipientTypeEnum;
    /**
     * recipient_id integer
     */
    recipientId: number;
}
export namespace GetCharactersCharacterIdMailRecipient {
    export type RecipientTypeEnum = 'alliance' | 'character' | 'corporation' | 'mailing_list';
    export const RecipientTypeEnum = {
        Alliance: 'alliance' as RecipientTypeEnum,
        Character: 'character' as RecipientTypeEnum,
        Corporation: 'corporation' as RecipientTypeEnum,
        MailingList: 'mailing_list' as RecipientTypeEnum
    }
}
