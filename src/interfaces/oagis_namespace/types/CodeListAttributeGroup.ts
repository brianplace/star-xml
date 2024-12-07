import * as OAGIS from '../oagis_namespace';
import * as BasicTypes from '../../basic_types/basic_types';

export interface CodeListAttributeGroup {
    get listID(): BasicTypes.IAttribute & OAGIS.NormalizedStringType;
    get listAgencyID(): BasicTypes.IAttribute & OAGIS.NormalizedStringType;
    get listAgencyName(): BasicTypes.IAttribute & OAGIS.StringType;
    get listName(): BasicTypes.IAttribute & OAGIS.StringType;
    get listVersionID(): BasicTypes.IAttribute & OAGIS.NormalizedStringType;
    get name(): BasicTypes.IAttribute & OAGIS.StringType;
    get languageID(): BasicTypes.IAttribute & OAGIS.LanguageCodeContentType;
    get listURI(): BasicTypes.IAttribute & BasicTypes.IanyURI;
    get listSchemeURI(): BasicTypes.IAttribute & BasicTypes.IanyURI;
}