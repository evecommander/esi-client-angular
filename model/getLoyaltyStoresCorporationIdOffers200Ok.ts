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
import { GetLoyaltyStoresCorporationIdOffersRequiredItem } from './getLoyaltyStoresCorporationIdOffersRequiredItem';


/**
 * 200 ok object
 */
export interface GetLoyaltyStoresCorporationIdOffers200Ok {
    /**
     * offer_id integer
     */
    offerId: number;
    /**
     * type_id integer
     */
    typeId: number;
    /**
     * quantity integer
     */
    quantity: number;
    /**
     * lp_cost integer
     */
    lpCost: number;
    /**
     * isk_cost integer
     */
    iskCost: number;
    /**
     * Analysis kredit cost
     */
    akCost?: number;
    /**
     * required_items array
     */
    requiredItems: Array<GetLoyaltyStoresCorporationIdOffersRequiredItem>;
}