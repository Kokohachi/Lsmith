/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenerateImageRequest
 */
export interface GenerateImageRequest {
    /**
     * 
     * @type {string}
     * @memberof GenerateImageRequest
     */
    prompt: string;
    /**
     * 
     * @type {string}
     * @memberof GenerateImageRequest
     */
    negative_prompt?: string;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    batch_size?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    batch_count?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateImageRequest
     */
    scheduler_id?: string;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    steps?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    scale?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    image_height?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    image_width?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof GenerateImageRequest
     */
    strength?: number;
    /**
     * 
     * @type {string}
     * @memberof GenerateImageRequest
     */
    img?: string;
}

/**
 * Check if a given object implements the GenerateImageRequest interface.
 */
export function instanceOfGenerateImageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "prompt" in value;

    return isInstance;
}

export function GenerateImageRequestFromJSON(json: any): GenerateImageRequest {
    return GenerateImageRequestFromJSONTyped(json, false);
}

export function GenerateImageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateImageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prompt': json['prompt'],
        'negative_prompt': !exists(json, 'negative_prompt') ? undefined : json['negative_prompt'],
        'batch_size': !exists(json, 'batch_size') ? undefined : json['batch_size'],
        'batch_count': !exists(json, 'batch_count') ? undefined : json['batch_count'],
        'scheduler_id': !exists(json, 'scheduler_id') ? undefined : json['scheduler_id'],
        'steps': !exists(json, 'steps') ? undefined : json['steps'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'image_height': !exists(json, 'image_height') ? undefined : json['image_height'],
        'image_width': !exists(json, 'image_width') ? undefined : json['image_width'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'strength': !exists(json, 'strength') ? undefined : json['strength'],
        'img': !exists(json, 'img') ? undefined : json['img'],
    };
}

export function GenerateImageRequestToJSON(value?: GenerateImageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prompt': value.prompt,
        'negative_prompt': value.negative_prompt,
        'batch_size': value.batch_size,
        'batch_count': value.batch_count,
        'scheduler_id': value.scheduler_id,
        'steps': value.steps,
        'scale': value.scale,
        'image_height': value.image_height,
        'image_width': value.image_width,
        'seed': value.seed,
        'strength': value.strength,
        'img': value.img,
    };
}

