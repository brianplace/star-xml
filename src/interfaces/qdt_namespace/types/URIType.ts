import * as BasicTypes from '../../basic_types/basic_types';

export class URIType {
    readonly URI: BasicTypes.IanyURI | undefined;

    constructor(uri?: BasicTypes.IanyURI) {
        this.URI = uri;
    }
}