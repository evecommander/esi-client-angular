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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { GetDogmaAttributesAttributeIdNotFound } from '../model/getDogmaAttributesAttributeIdNotFound';
import { GetDogmaAttributesAttributeIdOk } from '../model/getDogmaAttributesAttributeIdOk';
import { GetDogmaEffectsEffectIdNotFound } from '../model/getDogmaEffectsEffectIdNotFound';
import { GetDogmaEffectsEffectIdOk } from '../model/getDogmaEffectsEffectIdOk';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DogmaService {

    protected basePath = 'https://esi.tech.ccp.is/latest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get attributes
     * Get a list of dogma attribute ids  --- Alternate route: &#x60;/dev/dogma/attributes/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/&#x60;  Alternate route: &#x60;/v1/dogma/attributes/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDogmaAttributes(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getDogmaAttributes(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getDogmaAttributes(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getDogmaAttributes(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<number>>(`${this.basePath}/dogma/attributes/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get attribute information
     * Get information on a dogma attribute  --- Alternate route: &#x60;/dev/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/legacy/dogma/attributes/{attribute_id}/&#x60;  Alternate route: &#x60;/v1/dogma/attributes/{attribute_id}/&#x60;  --- This route expires daily at 11:05
     * @param attributeId A dogma attribute ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDogmaAttributesAttributeId(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<GetDogmaAttributesAttributeIdOk>;
    public getDogmaAttributesAttributeId(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetDogmaAttributesAttributeIdOk>>;
    public getDogmaAttributesAttributeId(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetDogmaAttributesAttributeIdOk>>;
    public getDogmaAttributesAttributeId(attributeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (attributeId === null || attributeId === undefined) {
            throw new Error('Required parameter attributeId was null or undefined when calling getDogmaAttributesAttributeId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<GetDogmaAttributesAttributeIdOk>(`${this.basePath}/dogma/attributes/${encodeURIComponent(String(attributeId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get effects
     * Get a list of dogma effect ids  --- Alternate route: &#x60;/dev/dogma/effects/&#x60;  Alternate route: &#x60;/legacy/dogma/effects/&#x60;  Alternate route: &#x60;/v1/dogma/effects/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDogmaEffects(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getDogmaEffects(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getDogmaEffects(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getDogmaEffects(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<number>>(`${this.basePath}/dogma/effects/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get effect information
     * Get information on a dogma effect  --- Alternate route: &#x60;/dev/dogma/effects/{effect_id}/&#x60;  Alternate route: &#x60;/v2/dogma/effects/{effect_id}/&#x60;  --- This route expires daily at 11:05
     * @param effectId A dogma effect ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDogmaEffectsEffectId(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<GetDogmaEffectsEffectIdOk>;
    public getDogmaEffectsEffectId(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetDogmaEffectsEffectIdOk>>;
    public getDogmaEffectsEffectId(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetDogmaEffectsEffectIdOk>>;
    public getDogmaEffectsEffectId(effectId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (effectId === null || effectId === undefined) {
            throw new Error('Required parameter effectId was null or undefined when calling getDogmaEffectsEffectId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<GetDogmaEffectsEffectIdOk>(`${this.basePath}/dogma/effects/${encodeURIComponent(String(effectId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}